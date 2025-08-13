import { Client } from '@notionhq/client';
import type { NotionData, AdminServices, Experience, Certification, Testimonial } from '../types';

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_API_KEY,
});

// 데이터베이스 ID들 (환경변수로 관리)
const DATABASES = {
  SERVICES: import.meta.env.VITE_NOTION_SERVICES_DB_ID || '',
  INQUIRIES: import.meta.env.VITE_NOTION_INQUIRIES_DB_ID || '',
  FAQS: import.meta.env.VITE_NOTION_FAQS_DB_ID || '',
  EXPERIENCES: import.meta.env.VITE_NOTION_EXPERIENCES_DB_ID || '',
  CERTIFICATIONS: import.meta.env.VITE_NOTION_CERTIFICATIONS_DB_ID || '',
  TESTIMONIALS: import.meta.env.VITE_NOTION_TESTIMONIALS_DB_ID || '',
};

// 서비스 데이터 가져오기
export const getServices = async (): Promise<AdminServices[]> => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.SERVICES,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'Order',
          direction: 'ascending',
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title[0]?.text?.content || '',
      description: page.properties.Description?.rich_text[0]?.text?.content || '',
      price: page.properties.Price?.number || 0,
      category: page.properties.Category?.select?.name || 'business',
      processTime: page.properties.ProcessTime?.rich_text[0]?.text?.content || '',
      requirements: page.properties.Requirements?.multi_select?.map((item: any) => item.name) || [],
      benefits: page.properties.Benefits?.multi_select?.map((item: any) => item.name) || [],
    }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

// 경력 데이터 가져오기
export const getExperiences = async (): Promise<Experience[]> => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.EXPERIENCES,
      sorts: [
        {
          property: 'StartDate',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title[0]?.text?.content || '',
      organization: page.properties.Organization?.rich_text[0]?.text?.content || '',
      startDate: page.properties.StartDate?.date?.start || '',
      endDate: page.properties.EndDate?.date?.start || undefined,
      description: page.properties.Description?.rich_text[0]?.text?.content || '',
      achievements: page.properties.Achievements?.multi_select?.map((item: any) => item.name) || [],
    }));
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
};

// 자격증 데이터 가져오기
export const getCertifications = async (): Promise<Certification[]> => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.CERTIFICATIONS,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      name: page.properties.Name?.title[0]?.text?.content || '',
      issuer: page.properties.Issuer?.rich_text[0]?.text?.content || '',
      date: page.properties.Date?.date?.start || '',
      credentialId: page.properties.CredentialId?.rich_text[0]?.text?.content || undefined,
    }));
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return [];
  }
};

// 고객 후기 데이터 가져오기
export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASES.TESTIMONIALS,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      name: page.properties.Name?.title[0]?.text?.content || '',
      company: page.properties.Company?.rich_text[0]?.text?.content || '',
      content: page.properties.Content?.rich_text[0]?.text?.content || '',
      rating: page.properties.Rating?.number || 5,
      date: page.properties.Date?.date?.start || '',
    }));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

// 문의사항 저장
export const createInquiry = async (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASES.INQUIRIES,
      },
      properties: {
        '이름': {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        '이메일': {
          email: data.email,
        },
        '연락처': {
          phone_number: data.phone,
        },
        '서비스': {
          select: {
            name: data.service,
          },
        },
        '상태': {
          select: {
            name: '새로운 문의',
          },
        },
        '등록일': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: data.message,
                },
              },
            ],
          },
        },
      ],
    });

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error('Notion API Error (Inquiry):', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '문의사항 저장에 실패했습니다.',
    };
  }
};

// 모든 데이터 가져오기
export const getAllNotionData = async (): Promise<NotionData> => {
  try {
    const [services, experiences, certifications, testimonials] = await Promise.all([
      getServices(),
      getExperiences(),
      getCertifications(),
      getTestimonials(),
    ]);

    return {
      services,
      experiences,
      certifications,
      testimonials,
    };
  } catch (error) {
    console.error('Error fetching all Notion data:', error);
    return {
      services: [],
      experiences: [],
      certifications: [],
      testimonials: [],
    };
  }
};
