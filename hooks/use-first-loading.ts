import { useEffect, useState } from 'react';

export const useFirstLoading = (key?: string) => {
  const [firstLoading, setFirstLoading] = useState<boolean | undefined>(
    JSON.parse(
      typeof window !== 'undefined'
        ? sessionStorage.getItem(`is-loaded-${key ?? 'initial'}`) ?? 'false'
        : 'true'
    )
  );

  useEffect(() => {
    if (!sessionStorage) return;

    sessionStorage.setItem(
      `is-loaded-${key ?? 'initial'}`,
      JSON.stringify(true)
    );
  }, [key, setFirstLoading]);

  return !firstLoading ?? true;
};
