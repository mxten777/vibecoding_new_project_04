import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
  lines = 1
}) => {
  const baseClasses = `
    bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 
    dark:from-gray-700 dark:via-gray-600 dark:to-gray-700
    animate-pulse relative overflow-hidden
  `;

  const shimmerClasses = `
    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    dark:before:via-gray-500/20
    before:animate-shimmer before:translate-x-[-100%]
  `;

  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'rounded h-4';
      case 'circular':
        return 'rounded-full aspect-square';
      case 'card':
        return 'rounded-lg';
      default:
        return 'rounded';
    }
  };

  if (variant === 'card') {
    return (
      <div className={`${baseClasses} ${shimmerClasses} ${getVariantClasses()} ${className}`} style={{ width, height }}>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6 animate-pulse"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${shimmerClasses} ${getVariantClasses()} ${className}`}
            style={{ 
              width: index === lines - 1 ? '75%' : width,
              height
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${shimmerClasses} ${getVariantClasses()} ${className}`}
      style={{ width, height }}
    />
  );
};

// 페이지별 전용 스켈레톤 컴포넌트들
export const HeroSkeleton: React.FC = () => (
  <div className="py-24 px-4">
    <div className="max-w-6xl mx-auto text-center space-y-8">
      <LoadingSkeleton variant="text" width="60%" height="3rem" />
      <LoadingSkeleton variant="text" lines={3} width="80%" />
      <div className="flex justify-center space-x-4">
        <LoadingSkeleton width="150px" height="50px" />
        <LoadingSkeleton width="150px" height="50px" />
      </div>
    </div>
  </div>
);

export const ServicesSkeleton: React.FC = () => (
  <div className="py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <LoadingSkeleton variant="text" width="40%" height="2.5rem" className="mx-auto mb-4" />
        <LoadingSkeleton variant="text" lines={2} width="60%" className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingSkeleton key={index} variant="card" height="300px" />
        ))}
      </div>
    </div>
  </div>
);

export const AboutSkeleton: React.FC = () => (
  <div className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <LoadingSkeleton variant="text" width="70%" height="2rem" />
          <LoadingSkeleton variant="text" lines={4} />
          <div className="flex space-x-4">
            <LoadingSkeleton width="100px" height="30px" />
            <LoadingSkeleton width="100px" height="30px" />
            <LoadingSkeleton width="100px" height="30px" />
          </div>
        </div>
        <LoadingSkeleton variant="rectangular" height="400px" />
      </div>
    </div>
  </div>
);

// 스마트 로딩 컨테이너
interface SmartLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton: React.ReactNode;
  delay?: number;
}

export const SmartLoading: React.FC<SmartLoadingProps> = ({
  isLoading,
  children,
  skeleton,
  delay = 200
}) => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setTimeout(() => setShowSkeleton(true), delay);
    } else {
      setShowSkeleton(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return (
    <AnimatePresence mode="wait">
      {showSkeleton ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {skeleton}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingSkeleton;