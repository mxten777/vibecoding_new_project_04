import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useToast } from '../../contexts/useToast';
import type { ToastMessage } from '../../contexts/toast-context';

interface ToastProps {
  toast: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useToast();

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <InformationCircleIcon className="w-5 h-5 text-blue-500" />;
      default:
        return <InformationCircleIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700';
      case 'error':
        return 'bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700';
      case 'info':
        return 'bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700';
      default:
        return 'bg-gray-50 border-gray-200 dark:bg-gray-900/30 dark:border-gray-700';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`
        relative flex items-start gap-3 p-4 rounded-xl border shadow-lg backdrop-blur-sm
        max-w-md w-full pointer-events-auto
        ${getStyles()}
      `}
    >
      {/* 아이콘 */}
      <div className="flex-shrink-0 mt-0.5">
        {getIcon()}
      </div>

      {/* 내용 */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          {toast.title}
        </h4>
        {toast.message && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {toast.message}
          </p>
        )}
        {toast.action && (
          <div className="mt-2">
            <button
              onClick={() => {
                toast.action?.onClick();
                removeToast(toast.id);
              }}
              className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              {toast.action.label}
            </button>
          </div>
        )}
      </div>

      {/* 닫기 버튼 */}
      <button
        onClick={() => removeToast(toast.id)}
        className="flex-shrink-0 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        aria-label="알림 닫기"
      >
        <XMarkIcon className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
      </button>
    </motion.div>
  );
};

export default Toast;