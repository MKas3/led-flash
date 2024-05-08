import React, { useCallback, useEffect, useState } from 'react';

const isServer = typeof window !== 'undefined';

export const useSessionState = <T>(key: string) => {
  const [innerState, setInnerState] = useState<T | undefined>(undefined);

  useEffect(() => {
    if (!sessionStorage || isServer) return;

    const state = sessionStorage.getItem(key);
    if (!state) return;

    setInnerState(JSON.parse(state));
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
