// 파일 타입별 아이콘 및 색상
export const getFileTypeInfo = (type: string) => {
  if (type.startsWith('image/')) {
    return { icon: '🖼️', color: 'text-blue-600', bgColor: 'bg-blue-100' };
  }
  if (type === 'application/pdf') {
    return { icon: '📄', color: 'text-red-600', bgColor: 'bg-red-100' };
  }
  if (type.includes('word') || type.includes('document')) {
    return { icon: '📝', color: 'text-blue-600', bgColor: 'bg-blue-100' };
  }
  if (type === 'text/plain') {
    return { icon: '📋', color: 'text-gray-600', bgColor: 'bg-gray-100' };
  }
  return { icon: '📎', color: 'text-gray-600', bgColor: 'bg-gray-100' };
};

// 파일 크기 포맷팅
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

// 이미지 썸네일 생성
export const createImageThumbnail = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('이미지 파일이 아닙니다.'));
      return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // 썸네일 크기 설정
      const maxSize = 200;
      let { width, height } = img;
      
      if (width > height) {
        if (width > maxSize) {
          height = (height * maxSize) / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width = (width * maxSize) / height;
          height = maxSize;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    
    img.onerror = () => reject(new Error('이미지 로드 실패'));
    img.src = URL.createObjectURL(file);
  });
};