'use client';

import React from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { contactWays, contactWaysNamings } from '@/config/footer';
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
>;

const formSchema = z.object({
  contactWay: z.enum(['phone', 'telegram', 'whatsapp']),
  fullName: z
    .string({ errorMap: () => ({ message: 'Введите ФИО' }) })
    .min(1, { message: 'Введите ФИО' })
    .regex(/^[\S]+ [\S]+ [\S]+$/g, 'Введите корректное ФИО'),
  phone: z
    .string({
      errorMap: () => ({
        message: 'Введите телефон',
      }),
    })
    .min(1, { message: 'Введите телефон' })
    .regex(/^\d{11}$/g, {
      message: 'Введите корректный телефон',
    }),
  email: z
    .string({
      errorMap: () => ({
        message: 'Введите Email',
      }),
    })
    .email({
      message: 'Введите корректный Email',
    }),
});

type FormProps = z.infer<typeof formSchema>;

export const FooterForm = ({ className, ...props }: FooterFormProps) => {
  const form = useZodForm(formSchema);

  const handleSubmit = (data: FormProps) => {
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
        <FormFieldItem<FormProps> name='contactWay'>
          <FormTabs defaultValue='phone'>
            <FormTabsList className='w-fit'>
              {contactWays.map((item, index) => (
                <FormTabsTrigger
                  key={index}
                  className='font-poppins text-base font-normal md:text-lg lg:text-xl'
                  value={item}
                >
                  {contactWaysNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </FormFieldItem>
      </div>
      <div className='flex w-full flex-col gap-y-3 md:w-2/3 md:gap-y-4 xl:w-1/2'>
        <span className='mb-2 text-base md:text-xl lg:text-3xl'>
          Контактная информация
        </span>
        <FormFieldItem<FormProps> name='fullName'>
          <FormInput
            name='name'
            id='name'
            autoComplete='name'
            placeholder='ФИО*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FormProps> name='phone'>
          <FormNumberMaskedInput
            name='phone'
            id='phone'
            type='tel'
            format='+# ### ###-##-##'
            mask='_'
            placeholder='+7 912 345-67-89*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<FormProps> name='email'>
          <FormInput
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
      <Button variant='gradient' type='submit'>
        Отправить заявку
      </Button>
    </Form>
  );
};
