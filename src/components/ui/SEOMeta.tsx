import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

const SITE_NAME = 'PARK.S.H 행정사';
const BASE_URL = 'https://parksinhwan.com';
const DEFAULT_DESC = '26년 고위공무원 경력, 경기도 남양주시 부시장 출신 박신환 행정사. 행정심판·민원대행·인허가 전문. 무료 상담 031-123-4567';

const SEOMeta: React.FC<SEOMetaProps> = ({ title, description, path = '', noindex = false }) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const desc = description || DEFAULT_DESC;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
};

export default SEOMeta;
