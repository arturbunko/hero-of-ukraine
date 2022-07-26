import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const selector = '#portal-container';

export const Portal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // @ts-ignore
    ref.current = document.querySelector(selector);

    if (ref.current) {
      disableBodyScroll(ref.current);
    }
    setMounted(true);

    return () => {
      clearAllBodyScrollLocks();
      setMounted(false);
    };
  }, []);

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null;
};
