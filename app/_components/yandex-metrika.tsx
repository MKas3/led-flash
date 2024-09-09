'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

type YandexMetrikaProps = {
  id: number;
};

declare global {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface Window {
    ym: (id: number, method: string, ...args: any[]) => void;
  }
}

export const YandexMetrika = ({ id }: YandexMetrikaProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    window.ym(id, 'hit', url);
  }, [id, pathname, searchParams]);

  return null;
};
