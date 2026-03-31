import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 카카오 비즈니스 채널 설정
// https://center-pf.kakao.com/ 에서 채널 생성 후 URL 교체
const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_your_channel_id';
const KAKAO_CHANNEL_NAME = '박신환 행정사';

const KakaoChannelButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* 말풍선 툴팁 */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="bg-white rounded-2xl shadow-2xl px-4 py-3 text-right pointer-events-none"
            style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.15))' }}
          >
            {/* 말풍선 꼬리 */}
            <div
              className="absolute -bottom-2 right-5 w-4 h-4 bg-white rotate-45"
              style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.05))' }}
            />
            <p className="font-bold text-gray-900 text-sm">{KAKAO_CHANNEL_NAME}</p>
            <p className="text-gray-500 text-xs mt-0.5">카카오톡으로 무료 상담</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 플로팅 버튼 */}
      <motion.a
        href={KAKAO_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 채널 상담"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{ backgroundColor: '#FEE500' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#3C1E1E">
          <path d="M12 3C7.03 3 3 6.36 3 10.5c0 2.64 1.6 4.96 4.03 6.36L6.1 20.2a.37.37 0 00.54.42l4.1-2.7c.41.05.82.08 1.26.08 4.97 0 9-3.36 9-7.5S16.97 3 12 3z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default KakaoChannelButton;
