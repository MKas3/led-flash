import type { CalculatorFormSchema } from '@/config/calculator/calculator';

import React from 'react';

import { FormFieldItem } from '@/components/ui/form/form-field-item';

import { cn } from '@/lib/utils';

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
        `flex w-full flex-col items-center md:items-stretch`,
        className
      )}
      {...props}
    />
  );
};
