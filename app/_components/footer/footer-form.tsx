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
      className={cn('flex flex-col items-center gap-y-12', className)}
      form={form}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className='flex flex-col gap-y-6'>
        <span className='text-base md:text-xl lg:text-3xl'>
          Как удобнее с вами связаться?
        </span>
        <FormFieldItem<FooterFormSchema> name='contactWay'>
          <FormTabs defaultValue='phone'>
            <FormTabsList
              className={cn(size === 'default' ? 'w-fit' : 'w-full')}
              size='lg'
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
          'flex w-full flex-col gap-y-3',
          size === 'default' ? 'md:w-2/3 md:gap-y-4 xl:w-1/2' : 'items-center'
        )}
      >
        <span className='mb-2 text-base md:text-xl lg:text-3xl'>
          Контактная информация
        </span>
        <FormFieldItem<FooterFormSchema> name='fullName'>
          <FormInput
            className={cn(variant === 'muted' && 'bg-muted-foreground')}
            name='name'
            id='name'
            autoComplete='name'
            placeholder='ФИО*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FooterFormSchema> name='phone'>
          <FormNumberMaskedInput
            className={cn(variant === 'muted' && 'bg-muted-foreground')}
            name='phone'
            id='phone'
            type='tel'
            format='+# ### ###-##-##'
            mask='_'
            placeholder='+7 912 345-67-89*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FooterFormSchema> name='email'>
          <FormInput
            className={cn(variant === 'muted' && 'bg-muted-foreground')}
            name='email'
            id='email'
            type='email'
            autoComplete='email'
            placeholder='Почта*'
          />
          <FormMessage />
        </FormFieldItem>
        <span className='mt-9 font-poppins text-[10px] md:text-base lg:text-xl'>
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
        className={cn(size === 'sm' && 'w-3/4')}
        variant='gradient'
        type='submit'
      >
        Отправить заявку
      </Button>
    </Form>
  );
};
