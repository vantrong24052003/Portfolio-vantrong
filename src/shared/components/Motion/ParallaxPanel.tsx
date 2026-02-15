import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxPanelProps {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

export const ParallaxPanel: React.FC<ParallaxPanelProps> = ({
  children,
  depth = 1,
  className = ""
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * depth]);

  return (
    <motion.div
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
