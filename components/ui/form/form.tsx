import type { UseZodFormReturn } from '@/hooks/use-zod-form';
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';

import { Form as FormPrimitive } from '@/components/ui/form';

const Form = <TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  onInvalidSubmit,
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
