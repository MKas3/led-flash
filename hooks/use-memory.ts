import { useState } from 'react';

import { useInterval } from './use-interval';

declare global {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface Performance {
    memory: {
      readonly jsHeapSizeLimit: number;
      readonly totalJSHeapSize: number;
      readonly usedJSHeapSize: number;
    };
  }
}

export type UseMemoryReturn = {
  supported: boolean;
  value: Performance['memory'];
};

export const useMemory = (): UseMemoryReturn => {
  const supported = performance && 'memory' in performance;
  const [value, setValue] = useState<Performance['memory']>({
    jsHeapSizeLimit: 0,
    totalJSHeapSize: 0,
    usedJSHeapSize: 0
  });

  useInterval(() => setValue(performance.memory), 1000, { enabled: supported });

  return { supported, value };
};
