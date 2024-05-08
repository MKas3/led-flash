import React from 'react';

import { CalculatorFormSchema } from '@/config/calculator/calculator';
import { cn } from '@/lib/utils';
import { FormFieldItem } from '@/components/ui/form/form-field-item';

type CalculatorFormFieldItemProps = React.ComponentPropsWithoutRef<
  typeof FormFieldItem<CalculatorFormSchema>
>;

export const CalculatorFormFieldItem = ({
  className,
  ...props
}: CalculatorFormFieldItemProps) => {
  return (
    <FormFieldItem<CalculatorFormSchema>
      className={cn(
        'flex w-full flex-col items-center md:items-stretch',
        className
      )}
      {...props}
    />
  );
};
