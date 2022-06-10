import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { OrientationObserver } from '../orientation-observer/orientation-observer';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0 },
};

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <OrientationObserver>{children}</OrientationObserver>
    </motion.main>
  );
};
