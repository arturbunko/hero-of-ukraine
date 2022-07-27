import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useLayoutEffect, useState, useRef } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const selector = '#portal-container';

const useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export const Portal = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      clearAllBodyScrollLocks();
      setMounted(false);
    };
  }, []);

  useIsomorphicEffect(() => {
    // @ts-ignore
    scrollRef.current = document.getElementById('modal-content');
    if (scrollRef.current) disableBodyScroll(scrollRef.current);
  });

  // @ts-ignore
  return mounted ? createPortal(children, document.querySelector(selector)) : null;
};
