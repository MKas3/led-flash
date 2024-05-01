import { screens } from '@/config/adaptive';
import { useMatchMedia } from '@/hooks/use-match-media';

export const useMinWidth = (minWidth: keyof typeof screens) => {
  return useMatchMedia(`(min-width: ${screens[minWidth]})`);
};
