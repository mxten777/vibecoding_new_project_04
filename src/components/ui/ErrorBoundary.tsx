import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  ExclamationTriangleIcon, 
  ArrowPathIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: string) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo: errorInfo.componentStack || undefined
    });
    
    // 에러 로깅
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // 외부 에러 핸들러 호출
    if (this.props.onError) {
      this.props.onError(error, errorInfo.componentStack || '');
    }

    // 프로덕션에서는 에러 모니터링 서비스로 전송
    if (process.env.NODE_ENV === 'production') {
      // Sentry, LogRocket 등의 서비스로 전송 가능
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error: Error, errorInfo: React.ErrorInfo) => {
    // 실제 에러 모니터링 서비스 연동 로직
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // 예: fetch로 에러 로깅 API 호출
    console.log('Error logged:', errorData);
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleContactSupport = () => {
    const subject = encodeURIComponent('웹사이트 오류 신고');
    const body = encodeURIComponent(
      `오류가 발생했습니다:\n\n` +
      `메시지: ${this.state.error?.message || 'Unknown error'}\n` +
      `시간: ${new Date().toLocaleString()}\n` +
      `페이지: ${window.location.href}\n\n` +
      `추가 설명:`
    );
    window.open(`mailto:admin@parksinhwan.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/10 dark:via-orange-900/10 dark:to-yellow-900/10 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center"
          >
            {/* 에러 아이콘 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center"
            >
              <ExclamationTriangleIcon className="w-10 h-10 text-white" />
            </motion.div>

            {/* 에러 메시지 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                앗! 문제가 발생했습니다
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                예상치 못한 오류가 발생했습니다.<br />
                잠시 후 다시 시도해주세요.
              </p>

              {/* 개발 모드에서만 에러 상세 정보 표시 */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6 text-sm">
                  <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300 mb-2">
                    개발자 정보 (프로덕션에서는 숨겨짐)
                  </summary>
                  <pre className="whitespace-pre-wrap text-xs text-red-600 dark:text-red-400 overflow-auto">
                    {this.state.error.message}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </motion.div>

            {/* 액션 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={this.handleRetry}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowPathIcon className="w-5 h-5" />
                다시 시도
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <HomeIcon className="w-5 h-5" />
                홈으로
              </button>
            </motion.div>

            {/* 문의하기 링크 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <button
                onClick={this.handleContactSupport}
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                문제가 지속되면 관리자에게 문의하기
              </button>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}



export default ErrorBoundary;