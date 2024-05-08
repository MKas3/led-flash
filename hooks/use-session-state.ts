import { useCallback, useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

export const useSessionState = <T>(key: string, initialState?: T) => {
  const [innerState, setInnerState] = useState<T | undefined>(initialState);

  useEffect(() => {
    if (isServer) return;

    const state = sessionStorage.getItem(key);
    if (!state) return;

    try {
      const parsedState = JSON.parse(state);
      setInnerState(parsedState);
    } catch {
      setInnerState(undefined);
    }
  }, [key]);

  const setState = useCallback(
    (value: T | undefined) => {
      if (isServer) return;

      sessionStorage.setItem(key, JSON.stringify(value));
      setInnerState(value);
    },
    [key]
  );

  return [innerState, setState] satisfies [
    T | undefined,
    (value: T | undefined) => void,
  ];
};
