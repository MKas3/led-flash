'use client';

import React from 'react';

import { sendFeedback } from '@/actions/email.action';
import { CommentsAddImageUploader } from '@/app/(home)/_components/comments/comments-add-image-uploader';
import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormInput } from '@/components/ui/form/form-input';
import { FormNumberMaskedInput } from '@/components/ui/form/form-number-input';
import { FormRating } from '@/components/ui/form/form-rating';
import { GradientText } from '@/components/ui/gradient-text';
import Link from '@/components/ui/link';
import { useZodForm } from '@/hooks/use-zod-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { cn } from '@/lib/utils';

export const commentsAddFormSchema = z.object({
  feedback: z.string({ errorMap: () => ({ message: 'Введите ваш отзыв' }) }).min(1),
  fullName: z
    .string({ errorMap: () => ({ message: 'Введите ФИО' }) })
    .min(1, { message: 'Введите ФИО' }),
  images: z.array(z.instanceof(File)).optional(),
  phone: z
    .string({
      errorMap: () => ({
        message: 'Введите телефон'
      })
    })
    .min(1, { message: 'Введите телефон' })
    .regex(/^\d{11}$/g, {
      message: 'Введите корректный телефон'
    }),
  rating: z.coerce.number({ errorMap: () => ({ message: 'Выберите количество звезд' }) }).min(1).max(5)
});

export type CommentsAddFormSchema = z.infer<typeof commentsAddFormSchema>;

type CommentsAddFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'form' | 'onSubmit'
> & {
  onSubmit?: () => void;
};

export const CommentsAddForm = ({ className, onSubmit, ...props }: CommentsAddFormProps) => {
  const form = useZodForm(commentsAddFormSchema);

  const handleSubmit = async (data: CommentsAddFormSchema) => {
    const formData = new FormData();
    formData.append('feedback', data.feedback);
    formData.append('fullName', data.fullName);
    data.images?.forEach((image) => (
      formData.append('images', image)
    ));
    formData.append('phone', data.phone);
    formData.append('rating', data.rating.toString());

    const success = await sendFeedback(formData);

    if (!success) return toast.error('Ошибка отправки');

    form.reset();
    form.clearErrors();
    toast.success('Отзыв отправлен!');
    onSubmit?.();
  };

  return (
    <Form
      className={cn('flex flex-col items-center gap-y-4 md:gap-y-6', className)}
      form={form}
      onSubmit={handleSubmit}
      {...props}
    >
      <FormFieldItem<CommentsAddFormSchema> name='rating'>
        <FormRating />
        <FormMessage />
      </FormFieldItem>
      <div className='flex w-full flex-col items-center gap-y-2.5 md:gap-y-3'>
        <span className='mb-1 text-3xs md:text-base'>
          Контактная информация
        </span>
        <FormFieldItem<CommentsAddFormSchema>
          className='w-full'
          name='fullName'
        >
          <FormInput
            className='!rounded-sm bg-muted-foreground p-3 text-3xs md:p-4 md:text-base lg:p-4 lg:text-base xl:text-base'
            autoComplete='name'
            id='name'
            name='name'
            placeholder='ФИО*'
          />
          <FormMessage />
        </FormFieldItem>
        <FormFieldItem<CommentsAddFormSchema>
          className='w-full'
          name='phone'
        >
          <FormNumberMaskedInput
            className='!rounded-sm bg-muted-foreground p-3 text-3xs md:p-4 md:text-base lg:p-4 lg:text-base xl:text-base'
            format='+# ### ###-##-##'
            id='phone'
            mask='_'
            name='phone'
            placeholder='+7 912 345-67-89*'
            type='tel'
          />
          <FormMessage />
        </FormFieldItem>
      </div>
      <div className='flex w-full flex-col items-center gap-y-2.5 md:gap-y-3'>
        <span className='mb-1 text-3xs md:text-base'>
          Расскажите как это было
        </span>
        <FormFieldItem<CommentsAddFormSchema>
          className='w-full'
          name='feedback'
        >
          <FormInput
            className='!rounded-sm bg-muted-foreground p-3 text-3xs md:p-4 md:text-base lg:p-4 lg:text-base xl:text-base'
            placeholder='Ваш отзыв'
          />
          <FormMessage />
        </FormFieldItem>
      </div>
      <div className='flex w-full flex-col items-center gap-y-2.5 md:gap-y-3'>
        <span className='mb-1 text-3xs md:text-base'>
          Прикрепите фото нашей работы
        </span>
        <FormFieldItem<CommentsAddFormSchema>
          className='w-full'
          name='images'
        >
          <CommentsAddImageUploader />
          <FormMessage />
        </FormFieldItem>
      </div>
      <span className='-mb-2 mt-1.5 text-center font-poppins text-5xs md:mt-3'>
        Нажимая на кнопку, я соглашаюсь с
        <br />
        <Link.Policy>
          <GradientText hasUnderline>
            политикой обработки персональных данных
          </GradientText>
        </Link.Policy>
      </span>
      <Button size='medium' variant='gradient'>Отправить отзыв</Button>
    </Form>
  );
};
