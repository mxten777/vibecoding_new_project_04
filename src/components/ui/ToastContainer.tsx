import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useToast } from '../../contexts/useToast';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 pointer-events-none">
      <AnimatePresence mode="popLayout">
        <div className="flex flex-col gap-2">
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} />
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;