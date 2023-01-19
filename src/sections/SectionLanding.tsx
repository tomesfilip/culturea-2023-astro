import { useEffect, useState } from 'react';

const SectionLanding = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < 569 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 569 ? true : false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <video
      id="bg-video"
      autoPlay={true}
      muted={true}
      playsInline={true}
      className="w-[100vw] bg-cover object-cover"
    >
      {isMobile ? (
        <source src="/videos/landing-mobile.mp4" type="video/mp4" />
      ) : (
        <source src="/videos/landing-desktop.mp4" type="video/mp4" />
      )}
    </video>
  );
};

export default SectionLanding;
