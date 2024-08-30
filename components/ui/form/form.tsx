import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler
} from 'react-hook-form';

import type { UseZodFormReturn } from '@/hooks/use-zod-form';

import React from 'react';

import { Form as FormPrimitive } from '@/components/ui/form';

const Form = <TFieldValues extends FieldValues = FieldValues>({
  form,
  onInvalidSubmit,
  onSubmit,
  ...props
}: Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  form: UseZodFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  onInvalidSubmit?: SubmitErrorHandler<TFieldValues>;
}) => {
  return (
    <FormPrimitive {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)}
        {...props}
      />
    </FormPrimitive>
  );
};
Form.displayName = 'Form';

export { Form };
