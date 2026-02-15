import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SceneNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

export const SceneNavigation: React.FC<SceneNavigationProps> = ({
  onPrev,
  onNext,
  showPrev = true,
  showNext = true,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Previous Button */}
      <div className="fixed top-1/2 left-6 md:left-12 -translate-y-1/2 z-40 pointer-events-none">
        {showPrev && (
          <button
            onClick={onPrev}
            className="pointer-events-auto glass-panel p-5 md:p-6 rounded-full group hover:border-primary/50 hover:shadow-[0_0_20px_hsla(var(--primary)/0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center"
            title={t('common.navigation.prev')}
          >
            <FaChevronLeft className="group-hover:-translate-x-1.5 transition-transform text-primary text-2xl md:text-3xl" />
          </button>
        )}
      </div>

      {/* Next Button */}
      <div className="fixed top-1/2 right-6 md:right-12 -translate-y-1/2 z-40 pointer-events-none">
        {showNext && (
          <button
            onClick={onNext}
            className="pointer-events-auto glass-panel p-5 md:p-6 rounded-full group hover:border-primary/50 hover:shadow-[0_0_20px_hsla(var(--primary)/0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center"
            title={t('common.navigation.next')}
          >
            <FaChevronRight className="group-hover:translate-x-1.5 transition-transform text-primary text-2xl md:text-3xl" />
          </button>
        )}
      </div>
    </>
  );
};
