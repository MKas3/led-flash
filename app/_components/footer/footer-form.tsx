'use client';

import type {
  FooterFormSchema
} from '@/config/footer';

import React from 'react';

import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormInput } from '@/components/ui/form/form-input';
import { FormNumberMaskedInput } from '@/components/ui/form/form-number-input';
import {
  FormTabs,
  FormTabsList,
  FormTabsTrigger
} from '@/components/ui/form/form-tabs';
import { GradientText } from '@/components/ui/gradient-text';
import Link from '@/components/ui/link';
import {
  contactWays,
  contactWaysNamings,
  footerFormSchema
} from '@/config/footer';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';

type FooterFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'form' | 'onSubmit'
> & {
  size?: 'default' | 'sm';
  variant?: 'default' | 'muted';
};

export const FooterForm = ({
  className,
  size = 'default',
  variant = 'default',
  ...props
}: FooterFormProps) => {
  const form = useZodForm(footerFormSchema);

  const handleSubmit = (data: FooterFormSchema) => {
    toast.success(`Complete: ${JSON.stringify(data)}`);
  };

  return (
    <Form
      className={cn(
        'flex flex-col items-center',
        size === 'default'
          ? 'gap-y-12'
          : `gap-y-4 md:gap-y-6`,
        className
      )}
      form={form}
      onSubmit={handleSubmit}
      {...props}
    >
      <div
        className={cn(
          'flex flex-col',
          size === 'default' ? 'gap-y-6' : 'w-full gap-y-4'
        )}
      >
        <span
          className={cn(
            'text-center',
            size === 'default'
              ? `lg:text-3xl md:text-xl`
              : `text-3xs md:text-base`
          )}
        >
          Как удобнее с вами связаться?
        </span>
        <FormFieldItem<FooterFormSchema>
          className={cn(size === 'sm' && 'w-full')}
          name='contactWay'
        >
          <FormTabs defaultValue='phone'>
            <FormTabsList
              className={cn(size === 'default' ? 'w-fit' : 'w-full')}
              size={size === 'default' ? 'lg' : 'sm'}
              variant={variant === 'default' ? 'reverse' : 'default'}
            >
              {contactWays.map((item, index) => (
                <FormTabsTrigger
                  key={index}
                  className='font-poppins font-normal'
                  aria-controls={undefined}
                  id={`contact-way-${item}`}
                  value={item}
                >
                  {contactWaysNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </FormFieldItem>
      </div>
      <div
        className={cn(
          'flex w-full flex-col',
          size === 'default'
            ? `gap-y-3 md:w-2/3 md:gap-y-4 xl:w-1/2`
            : `items-center gap-y-2.5 md:gap-y-3`
        )}
      >
        <span
          className={cn(
            size === 'default'
              ? `mb-2 lg:text-3xl md:text-xl`
              : `mb-1 text-3xs md:text-base`
          )}
        >
          Контактная информация
        </span>
        <FormFieldItem<FooterFormSchema>
          className={cn(size === 'sm' && 'w-full')}
          name='fullName'
        >
          <FormInput
            className={cn(
              variant === 'muted' && 'bg-muted-foreground',
              size === 'sm'
              && `rounded-sm p-3 text-3xs lg:p-4 lg:text-base md:p-4 md:text-base xl:text-base`
            )}
            autoComplete='name'
            id='name'
            name='name'
            placeholder='ФИО*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FooterFormSchema>
          className={cn(size === 'sm' && 'w-full')}
          name='phone'
        >
          <FormNumberMaskedInput
            className={cn(
              variant === 'muted' && 'bg-muted-foreground',
              size === 'sm'
              && `rounded-sm p-3 text-3xs lg:p-4 lg:text-base md:p-4 md:text-base xl:text-base`
            )}
            format='+# ### ###-##-##'
            id='phone'
            mask='_'
            name='phone'
            placeholder='+7 912 345-67-89*'
            type='tel'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FooterFormSchema>
          className={cn(size === 'sm' && 'w-full')}
          name='email'
        >
          <FormInput
            className={cn(
              variant === 'muted' && 'bg-muted-foreground',
              size === 'sm'
              && `rounded-sm p-3 text-3xs lg:p-4 lg:text-base md:p-4 md:text-base xl:text-base`
            )}
            autoComplete='email'
            id='email'
            name='email'
            placeholder='Почта*'
            type='email'
          />
          <FormMessage />
        </FormFieldItem>
        <span
          className={cn(
            'text-center font-poppins text-5xs',
            size === 'default'
              ? `mt-9 lg:text-xl md:text-base`
              : `mt-1.5 md:mt-3`
          )}
        >
          Нажимая на кнопку , я соглашаюсь
          {' '}
          <Link.Link href='/'>
            <GradientText hasUnderline>с политикой</GradientText>
            <br />
            <GradientText hasUnderline>
              обработки персональных данных
            </GradientText>
          </Link.Link>
        </span>
      </div>
      <Button
        className={cn(size === 'sm' && '!rounded-sm !px-12 !py-6')}
        type='submit'
        variant='gradient'
      >
        Отправить заявку
      </Button>
    </Form>
  );
};
