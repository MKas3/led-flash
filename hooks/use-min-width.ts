import { screens } from '@/config/adaptive';
import { useMatchMedia } from '@/hooks/use-match-media';

export const useMinWidth = (maxWidth: keyof typeof screens) => {
  return useMatchMedia(`(min-width: ${screens[maxWidth]})`);
};
