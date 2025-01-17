'use client';

import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';

export type FormInputProps = React.ComponentPropsWithoutRef<typeof Input>;

const FormInput = ({ defaultValue = '', ...props }: FormInputProps) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <Input {...field} value={field.value ?? defaultValue} {...props} />
    </FormControl>
  );
};

export { FormInput };
