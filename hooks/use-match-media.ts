import { useEffect, useState } from 'react';

export const useMatchMedia = (media: string) => {
  const [matchMedia, setMatchMedia] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(media);

    const handleMatchMediaChange = (e: MediaQueryListEvent) => {
      setMatchMedia(e.matches);
    };

    setMatchMedia(matchMedia.matches);

    matchMedia.addEventListener('change', handleMatchMediaChange);

    return () => {
      matchMedia.removeEventListener('change', handleMatchMediaChange);
    };
  }, [media]);

  return matchMedia;
};
