'use client';

import type {
  Control,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import { useFormContext } from 'react-hook-form';

import { FormField } from './form-field';

const FormFieldControl = <
  TFieldValues extends FieldValues = {},
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  children?: React.ReactNode;
}) => {
  const { control } = useFormContext();

  return <FormField control={control as Control<TFieldValues>} {...props} />;
};

export { FormFieldControl };
