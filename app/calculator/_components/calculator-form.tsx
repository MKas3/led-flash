'use client';

import type {
  CalculatorFormSchema
} from '@/config/calculator/calculator';

import React, { useRef } from 'react';
import { useWatch } from 'react-hook-form';

import { OrderModalTrigger } from '@/app/_components/order-modal/order-modal-trigger';
import { CalculatorDiscount } from '@/app/calculator/_components/calculator-discount';
import { CalculatorFormFieldItem } from '@/app/calculator/_components/calculator-form-field-item';
import { CalculatorHeading } from '@/app/calculator/_components/calculator-heading';
import { CalculatorPrice } from '@/app/calculator/_components/calculator-price';
import { CalculatorSection } from '@/app/calculator/_components/calculator-section';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormNumberInput } from '@/components/ui/form/form-number-input';
import {
  FormTabs,
  FormTabsList,
  FormTabsTrigger
} from '@/components/ui/form/form-tabs';
import {
  calculatorFormDefaults,
  calculatorFormSchema,
  places,
  placesNamings,
  substrateTypes,
  substrateTypesNamings
} from '@/config/calculator/calculator';
import { neonTypes, neonTypesNamings } from '@/config/home/constructor';
import { useCalculatorQuery } from '@/hooks/use-calculator-query';
import { useZodForm } from '@/hooks/use-zod-form';

import { cn } from '@/lib/utils';

type CalculatorFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'form' | 'onSubmit'
>;

export const CalculatorForm = ({
  className,
  ...props
}: CalculatorFormProps) => {
  const [, setQuery] = useCalculatorQuery();

  const triggerRef = useRef<React.ElementRef<typeof OrderModalTrigger>>(null);

  const form = useZodForm(calculatorFormSchema);
  const formData = useWatch(form);

  const handleSubmit = async (data: CalculatorFormSchema) => {
    triggerRef.current?.click();
    await setQuery(data);
  };

  return (
    <Form
      className={cn(
        `-mx-4 flex flex-col gap-y-9 font-poppins [&_:is(input,button)]:!text-[length:inherit] [&_input]:w-full [&_input]:placeholder:!text-[length:inherit] 2xl:px-24 lg:px-2 md:mx-0 xl:px-20`,
        className
      )}
      form={form}
      onSubmit={handleSubmit}
      {...props}
    >
      <CalculatorSection>
        <CalculatorHeading as='h3'>Выберите тип подложки</CalculatorHeading>
        <CalculatorFormFieldItem name='substrateType'>
          <FormTabs defaultValue={calculatorFormDefaults.substrateType}>
            <FormTabsList size='lg' variant='reverse'>
              {substrateTypes.map((item, index) => (
                <FormTabsTrigger
                  key={index}
                  aria-controls={undefined}
                  id={`substrate-type-${item}`}
                  value={item}
                >
                  {substrateTypesNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection>
        <CalculatorHeading as='h3'>Выберите размеры подложки</CalculatorHeading>
        <CalculatorFormFieldItem name='width'>
          <FormNumberInput
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
            name='width'
            placeholder='Ширина в сантиметрах'
            suffix=' см'
            isNumericValue
          />
          <FormMessage />
        </CalculatorFormFieldItem>
        <CalculatorFormFieldItem name='height'>
          <FormNumberInput
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
            name='height'
            placeholder='Высота в сантиметрах'
            suffix=' см'
            isNumericValue
          />
          <FormMessage />
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection>
        <CalculatorHeading as='h3'>
          Выберите длину гибкого неона
        </CalculatorHeading>
        <CalculatorFormFieldItem name='length'>
          <FormNumberInput
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
            name='length'
            placeholder='Длина в метрах'
            suffix=' м'
            isNumericValue
          />
          <FormMessage />
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection>
        <CalculatorHeading as='h3'>Выберите тип неона</CalculatorHeading>
        <CalculatorFormFieldItem name='neonType'>
          <FormTabs defaultValue={calculatorFormDefaults.neonType}>
            <FormTabsList size='lg' variant='reverse'>
              {neonTypes.map((item, index) => (
                <FormTabsTrigger
                  key={index}
                  aria-controls={undefined}
                  id={`neon-type-${item}`}
                  value={item}
                >
                  {neonTypesNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection>
        <CalculatorHeading as='h3'>
          Количество отдельных элементов неона
        </CalculatorHeading>
        <CalculatorFormFieldItem name='count'>
          <FormNumberInput
            allowNegative={false}
            decimalScale={0}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
            name='length'
            placeholder='Элементы неона в штуках'
            suffix=' шт.'
            isNumericValue
          />
          <FormMessage />
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection>
        <CalculatorHeading as='h3'>
          Место использования вывески
        </CalculatorHeading>
        <CalculatorFormFieldItem name='place'>
          <FormTabs defaultValue={calculatorFormDefaults.place}>
            <FormTabsList size='lg' variant='reverse'>
              {places.map((item, index) => (
                <FormTabsTrigger
                  key={index}
                  aria-controls={undefined}
                  id={`place-${item}`}
                  value={item}
                >
                  {placesNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection className='items-stretch'>
        <CalculatorHeading as='h3' id='discount-progressbar'>
          Размер вашей скидки
        </CalculatorHeading>
        <CalculatorDiscount />
      </CalculatorSection>
      <CalculatorPrice formData={formData} />
      <OrderModalTrigger ref={triggerRef} className='hidden' />
    </Form>
  );
};
