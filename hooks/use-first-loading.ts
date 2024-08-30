import { useEffect, useState } from 'react';

import { z } from 'zod';

const sessionFirstLoadingSchema = z.enum(['true', 'false']);

const isServer = typeof window === 'undefined';

export const useFirstLoading = (key?: string) => {
  const [firstLoading, setFirstLoading] = useState<boolean | undefined>(() => {
    if (isServer) return true;

    const sessionFirstLoading
      = sessionStorage.getItem(`is-loaded-${key ?? 'initial'}`) ?? 'false';

    const parsedFirstLoading
      = sessionFirstLoadingSchema.safeParse(sessionFirstLoading);

    if (!parsedFirstLoading.success) return true;

    return !JSON.parse(parsedFirstLoading.data);
  });

  useEffect(() => {
    if (!sessionStorage) return;

    sessionStorage.setItem(
      `is-loaded-${key ?? 'initial'}`,
      JSON.stringify(true)
    );
  }, [key, setFirstLoading]);

  return firstLoading ?? true;
};
