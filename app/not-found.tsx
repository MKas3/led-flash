import React from 'react';

import { Button } from '@/components/ui/button';
import Link from '@/components/ui/link';
import { Main } from '@/components/ui/main';

const ErrorPage = () => {
  return (
    <Main className='flex size-full flex-col items-center justify-between gap-10'>
      <div className='flex min-h-screen flex-col items-center justify-center gap-6'>
        <span className='text-6xl font-bold lg:text-8xl'>404</span>
        <span className='text-4xl font-bold lg:text-5xl'>Страница не найдена</span>
        <span className='text-xl lg:text-2xl'>
          Скоро все будет работать, пока возвращайтесь на главную страницу
        </span>
        <Button className='text-xl lg:text-2xl' size='lg' asChild>
          <Link.Home>Перейти на главную</Link.Home>
        </Button>
      </div>
    </Main>
  );
};

export default ErrorPage;
