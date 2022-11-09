import { useEffect } from 'react';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

const useFullHeight = () => {
  useEffect(() => {
    window.addEventListener('resize', documentHeight);
    documentHeight();

    return () => {
      window.removeEventListener('resize', documentHeight);
    };
  }, []);
};

export default useFullHeight;
