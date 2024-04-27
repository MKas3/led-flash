'use client';

import type { ForwardedRef } from 'react';

import { forwardRef, useImperativeHandle } from 'react';
import { useController } from 'react-hook-form';
import {
  NumericFormat,
  NumericFormatProps,
  PatternFormat,
  PatternFormatProps,
} from 'react-number-format';

import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const useFormNumberInput = (
  ref: ForwardedRef<any>,
  defaultValue: string | number | undefined
) => {
  const { name } = useFormField();
  const {
    field: { ref: fieldRef, ...field },
  } = useController({
    name,
  });
  useImperativeHandle(fieldRef, () => ref);
  useFormDefaultValue(defaultValue, field.value, field.onChange);
  return field;
};

const FormNumberInput = forwardRef<
  React.ElementRef<typeof Input>,
  Omit<NumericFormatProps, 'defaultValue'> & {
    isNumericValue?: boolean;
    defaultValue?: string | undefined;
    defaultNumericValue?: number | undefined;
  }
>(
  (
    {
      isNumericValue = false,
      defaultValue = '',
      defaultNumericValue,
      customInput,
      ...props
    },
    ref
  ) => {
    const { onChange, ...field } = useFormNumberInput(
      ref,
      isNumericValue ? defaultNumericValue : defaultValue
    );

    return (
      <FormControl>
        <NumericFormat
          {...field}
          value={field.value ?? defaultValue}
          onValueChange={(values) => {
            onChange(isNumericValue ? values.floatValue : values.value);
          }}
          getInputRef={ref}
          customInput={customInput ?? Input}
          {...props}
        />
      </FormControl>
    );
  }
);
FormNumberInput.displayName = 'FormNumberInput';

const FormNumberMaskedInput = forwardRef<
  React.ElementRef<typeof Input>,
  Omit<PatternFormatProps, 'defaultValue'> & {
    isNumericValue?: boolean;
    defaultValue?: string | undefined;
    defaultNumericValue?: number | undefined;
  }
>(
  (
    {
      isNumericValue = false,
      defaultValue = '',
      defaultNumericValue,
      customInput,
      ...props
    },
    ref
  ) => {
    const { onChange, ...field } = useFormNumberInput(
      ref,
      isNumericValue ? defaultNumericValue : defaultValue
    );

    return (
      <FormControl>
        <PatternFormat
          {...field}
          value={field.value ?? defaultValue}
          onValueChange={(values) => {
            onChange(isNumericValue ? values.floatValue : values.value);
          }}
          getInputRef={ref}
          customInput={customInput ?? Input}
          {...props}
        />
      </FormControl>
    );
  }
);
FormNumberMaskedInput.displayName = 'FormNumberMaskedInput';

export { FormNumberInput, FormNumberMaskedInput };
