import { useEffect, useRef, useState } from 'react';

import { useEvent } from './use-event';

export type UseIntervalOptions = {
  enabled?: boolean;
};

export type UseIntervalReturn = {
  active: boolean;
  pause: () => void;
  resume: () => void;
};

type UseInterval = {
  (callback: () => void, interval?: number, options?: UseIntervalOptions): UseIntervalReturn;

  (callback: () => void, options?: UseIntervalOptions & { interval?: number }): UseIntervalReturn;
};

export const useInterval = ((...params: any[]): UseIntervalReturn => {
  const callback = params[0] as () => void;
  const interval
    = ((typeof params[1] === 'number'
      ? params[1]
      : (params[1] as UseIntervalOptions & { interval?: number }).interval) as number) ?? 1000;
  const options
    = typeof params[1] === 'object'
      ? (params[1] as (UseIntervalOptions & { interval?: number }) | undefined)
      : (params[2] as UseIntervalOptions | undefined);
  const enabled = options?.enabled ?? true;

  const [active, setActive] = useState<boolean>(enabled ?? true);

  const intervalIdRef = useRef<ReturnType<typeof setInterval>>();
  const internalCallback = useEvent(callback);

  useEffect(() => {
    if (!enabled) return;

    intervalIdRef.current = setInterval(internalCallback, interval);
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [enabled, interval]);

  const pause = () => {
    setActive(false);
    clearInterval(intervalIdRef.current);
  };

  const resume = () => {
    if (interval <= 0) return;
    setActive(true);
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(internalCallback, interval);
  };

  return {
    active,
    pause,
    resume
  };
}) as UseInterval;
