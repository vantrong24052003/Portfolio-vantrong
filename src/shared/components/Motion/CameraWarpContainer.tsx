import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CameraWarpContainerProps {
  children: React.ReactNode;
  sceneKey: string | number;
}

export const CameraWarpContainer: React.FC<CameraWarpContainerProps> = ({ children, sceneKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        initial={{
          opacity: 0,
          scale: 1.2,
          z: 500,
          rotateX: 5
        }}
        animate={{
          opacity: 1,
          scale: 1,
          z: 0,
          rotateX: 0
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          z: -500,
          rotateX: -5
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
