import React from 'react';

import { api } from '@/config/api';
import { contacts } from '@/config/contacts';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';
import Link from '@/components/ui/link';
import { YandexMap } from '@/components/shared/yandex-map';
import { YandexMapProvider } from '@/components/shared/yandex-map-provider';

type ContactsProps = React.HTMLAttributes<HTMLDivElement>;

export const Contacts = ({ className, ...props }: ContactsProps) => {
  return (
    <div className={cn('grid w-full grid-cols-3', className)} {...props}>
      <ul className='col-span-2 grid list-disc grid-cols-1 grid-rows-4 gap-y-12 pl-8 text-3xl'>
        {contacts.map((item, index) => (
          <li className='gap-y-6 -indent-1' key={index}>
            <Heading
              className='mb-6 inline-block !text-[length:inherit] font-semibold'
              as='h3'
            >
              {item.naming}
            </Heading>
            {item.altNaming === 'phone' ? (
              <Link.Phone className='block -indent-8' />
            ) : item.altNaming === 'email' ? (
              <Link.Email className='block -indent-8' />
            ) : (
              <span className='block -indent-8'>{item.value}</span>
            )}
          </li>
        ))}
      </ul>
      <div className='aspect-[9/11] w-full overflow-hidden rounded-sm'>
        <YandexMapProvider apiUrl={api.yMapsApiUrl}>
          <YandexMap />
        </YandexMapProvider>
      </div>
    </div>
  );
};
