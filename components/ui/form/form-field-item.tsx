import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import React from 'react';

import { FormItem } from '@/components/ui/form';
import { FormFieldControl } from '@/components/ui/form/form-field-control';

const FormFieldItem = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  className,
  children,
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <FormFieldControl {...props}>
      <FormItem className={className}>{children}</FormItem>
    </FormFieldControl>
  );
};
FormFieldItem.displayName = 'FormFieldItem';

export { FormFieldItem };
