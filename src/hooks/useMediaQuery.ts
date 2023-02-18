import { useEffect, useState } from 'react';

const useMediaQuery = (mediaWidth: number = 569): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < mediaWidth ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mediaWidth ? true : false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useMediaQuery;
