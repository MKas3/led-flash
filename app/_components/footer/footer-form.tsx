'use client';

import React from 'react';
import { useWatch } from 'react-hook-form';
import { toast } from 'sonner';

import {
  contactWays,
  contactWaysNamings,
  FooterFormSchema,
  footerFormSchema,
} from '@/config/footer';
import { cn } from '@/lib/utils';
import { useZodForm } from '@/hooks/use-zod-form';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormInput } from '@/components/ui/form/form-input';
import { FormNumberMaskedInput } from '@/components/ui/form/form-number-input';
import {
  FormTabs,
  FormTabsList,
  FormTabsTrigger,
} from '@/components/ui/form/form-tabs';
import { GradientText } from '@/components/ui/gradient-text';
import Link from '@/components/ui/link';

type FooterFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'form' | 'onSubmit'
> & {
  variant?: 'default' | 'muted';
  size?: 'default' | 'sm';
};

export const FooterForm = ({
  variant = 'default',
  size = 'default',
  className,
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
        size === 'default' ? 'gap-y-12' : 'gap-y-4 md:gap-y-6',
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
              ? 'md:text-xl lg:text-3xl'
              : 'text-3xs md:text-base'
          )}
        >
          Как удобнее с вами связаться?
        </span>
        <FormFieldItem<FooterFormSchema>
          name='contactWay'
          className={cn(size === 'sm' && 'w-full')}
        >
          <FormTabs defaultValue='phone'>
            <FormTabsList
              className={cn(size === 'default' ? 'w-fit' : 'w-full')}
              variant={variant === 'default' ? 'reverse' : 'default'}
              size={size === 'default' ? 'lg' : 'sm'}
            >
              {contactWays.map((item, index) => (
                <FormTabsTrigger
                  id={`contact-way-${item}`}
                  key={index}
                  className='font-poppins font-normal'
                  value={item}
                  aria-controls={undefined}
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
            ? 'gap-y-3 md:w-2/3 md:gap-y-4 xl:w-1/2'
            : 'items-center gap-y-2.5 md:gap-y-3'
        )}
      >
        <span
          className={cn(
            size === 'default'
              ? 'mb-2 md:text-xl lg:text-3xl'
              : 'mb-1 text-3xs md:text-base'
          )}
        >
          Контактная информация
        </span>
        <FormFieldItem<FooterFormSchema>
          name='fullName'
          className={cn(size === 'sm' && 'w-full')}
        >
          <FormInput
            className={cn(
              variant === 'muted' && 'bg-muted-foreground',
              size === 'sm' &&
                'rounded-sm p-3 text-3xs md:p-4 md:text-base lg:p-4 lg:text-base xl:text-base'
            )}
            name='name'
            id='name'
            autoComplete='name'
            placeholder='ФИО*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FooterFormSchema>
          name='phone'
          className={cn(size === 'sm' && 'w-full')}
        >
          <FormNumberMaskedInput
            className={cn(
              variant === 'muted' && 'bg-muted-foreground',
              size === 'sm' &&
                'rounded-sm p-3 text-3xs md:p-4 md:text-base lg:p-4 lg:text-base xl:text-base'
            )}
            name='phone'
            id='phone'
            type='tel'
            format='+# ### ###-##-##'
            mask='_'
            placeholder='+7 912 345-67-89*'
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
              size === 'sm' &&
                'rounded-sm p-3 text-3xs md:p-4 md:text-base lg:p-4 lg:text-base xl:text-base'
            )}
            name='email'
            id='email'
            type='email'
            autoComplete='email'
            placeholder='Почта*'
          />
          <FormMessage />
        </FormFieldItem>
        <span
          className={cn(
            'text-center font-poppins text-5xs',
            size === 'default'
              ? 'mt-9 md:text-base lg:text-xl'
              : 'mt-1.5 md:mt-3'
          )}
        >
          Нажимая на кнопку , я соглашаюсь{' '}
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
        variant='gradient'
        type='submit'
      >
        Отправить заявку
      </Button>
    </Form>
  );
};
