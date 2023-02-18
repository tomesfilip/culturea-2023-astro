import { useEffect, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const SectionLanding = () => {
  const isMobile: boolean = useMediaQuery(569);

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
