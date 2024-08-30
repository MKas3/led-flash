import React from 'react';

import { YandexMap } from '@/components/shared/yandex-map';
import { Heading } from '@/components/ui/heading';
import Link from '@/components/ui/link';
import { contacts } from '@/config/contacts';

import { cn } from '@/lib/utils';

type ContactsProps = React.HTMLAttributes<HTMLDivElement>;

export const Contacts = ({ className, ...props }: ContactsProps) => {
  return (
    <div
      className={cn(
        `grid w-full grid-rows-[min-content_min-content] gap-12 lg:grid-cols-[auto_minmax(0,0.75fr)]`,
        className
      )}
      {...props}
    >
      <ul className='grid list-disc grid-cols-1 grid-rows-4 gap-y-6 pl-8 text-xs sm:text-base md:text-lg xl:text-2xl 2xl:text-3xl'>
        {contacts.map((item, index) => (
          <li
            key={index}
            className='space-y-1 indent-[-0.25em] lg:space-y-4 xl:space-y-6'
          >
            <Heading
              className='inline-block !text-base font-semibold md:!text-[length:inherit]'
              as='h3'
            >
              {item.naming}
            </Heading>
            {item.altNaming === 'phone'
              ? (
                  <Link.Phone className='block indent-[-2em]' />
                )
              : item.altNaming === 'email'
                ? (
                    <Link.Email className='block indent-[-2em]' />
                  )
                : (
                    <span className='block indent-[-2em]'>{item.value}</span>
                  )}
          </li>
        ))}
      </ul>
      <div className='aspect-[9/11] h-full overflow-hidden rounded-sm'>
        <YandexMap />
      </div>
    </div>
  );
};
