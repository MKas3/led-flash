'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FormRadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroup>,
  React.ComponentPropsWithoutRef<typeof RadioGroup>
>(({ defaultValue, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });

  return (
    <FormControl>
      <RadioGroup
        {...field}
        ref={ref}
        value={field.value ?? defaultValue}
        onValueChange={field.onChange}
        {...props}
      />
    </FormControl>
  );
});
FormRadioGroup.displayName = RadioGroup.displayName;

const FormRadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  React.ComponentPropsWithoutRef<typeof RadioGroupItem>
>(({ ...props }, ref) => {
  return (
    <FormControl>
      <RadioGroupItem ref={ref} {...props} />
    </FormControl>
  );
});
FormRadioGroupItem.displayName = RadioGroupItem.displayName;

export { FormRadioGroup, FormRadioGroupItem };
