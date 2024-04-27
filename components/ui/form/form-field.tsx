import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import { FormField as FormFieldPrimitive } from '@/components/ui/form';

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  children?: React.ReactNode;
}) => {
  return <FormFieldPrimitive render={() => <>{children}</>} {...props} />;
};

export { FormField };
