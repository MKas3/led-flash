'use client';

import React, { forwardRef } from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { FormRadioGroup, FormRadioGroupItem } from '@/components/ui/form/form-radio-group';
import Icon from '@/components/ui/icon';
import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';

const FormRating = forwardRef<
  React.ElementRef<typeof FormRadioGroup>,
  React.ComponentPropsWithoutRef<typeof FormRadioGroup>
>(({ className, ...props }, ref) => {
  const { name } = useFormField();
  const { field } = useController({
    name
  });

  return (
    <FormControl>
      <FormRadioGroup
        ref={ref}
        className={cn('flex gap-x-4', className)}
        value={field.value}
        onValueChange={field.onChange}
        {...props}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Label
            key={index}
            className='group cursor-pointer'
            aria-checked={index + 1 <= field.value ? 'true' : 'false'}
            aria-posinset={index + 1}
            aria-setsize={5}
          >
            <Icon.Star
              className={cn(
                `size-12 transition-colors`,
                field.value > index ? 'text-yellow-500' : 'text-muted-foreground'
              )}
            />
            <FormRadioGroupItem className='hidden' value={(index + 1).toString()} indicatorHidden />
          </Label>
        ))}
      </FormRadioGroup>
    </FormControl>
  );
});
FormRating.displayName = 'FormRating';

export { FormRating };
