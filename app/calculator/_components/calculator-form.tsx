'use client';

import React, { useRef } from 'react';
import { useWatch } from 'react-hook-form';
import { toast } from 'sonner';

import {
  calculatorFormDefaults,
  CalculatorFormSchema,
  calculatorFormSchema,
  places,
  placesNamings,
  substrateTypes,
  substrateTypesNamings,
} from '@/config/calculator/calculator';
import { neonTypes, neonTypesNamings } from '@/config/home/constructor';
import { cn } from '@/lib/utils';
import { useZodForm } from '@/hooks/use-zod-form';
import { FormMessage } from '@/components/ui/form';
import { Form } from '@/components/ui/form/form';
import { FormNumberInput } from '@/components/ui/form/form-number-input';
import {
  FormTabs,
  FormTabsList,
  FormTabsTrigger,
} from '@/components/ui/form/form-tabs';
import { OrderModalTrigger } from '@/app/_components/order-modal/order-modal-trigger';
import { CalculatorDiscount } from '@/app/calculator/_components/calculator-discount';
import { CalculatorFormFieldItem } from '@/app/calculator/_components/calculator-form-field-item';
import { CalculatorHeading } from '@/app/calculator/_components/calculator-heading';
import { CalculatorPrice } from '@/app/calculator/_components/calculator-price';
import { CalculatorSection } from '@/app/calculator/_components/calculator-section';

type CalculatorFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'form' | 'onSubmit'
>;

export const CalculatorForm = ({
  className,
  ...props
}: CalculatorFormProps) => {
  const triggerRef = useRef<React.ElementRef<typeof OrderModalTrigger>>(null);

  const form = useZodForm(calculatorFormSchema);
  const formData = useWatch(form);

  const handleSubmit = (data: CalculatorFormSchema) => {
    triggerRef.current?.click();
    toast.success(`Complete: ${JSON.stringify(data)}`);
  };

  return (
    <Form
      className={cn(
        '-mx-4 flex flex-col gap-y-9 font-poppins md:mx-0 lg:px-2 xl:px-20 2xl:px-24 [&_:is(input,button)]:!text-[length:inherit] [&_input]:w-full [&_input]:placeholder:!text-[length:inherit] ',
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
            <FormTabsList variant='reverse' size='lg'>
              {substrateTypes.map((item, index) => (
                <FormTabsTrigger
                  id={`substrate-type-${item}`}
                  key={index}
                  value={item}
                  aria-controls={undefined}
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
            name='width'
            placeholder='Ширина в сантиметрах'
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
            suffix=' см'
            isNumericValue
          />
          <FormMessage />
        </CalculatorFormFieldItem>
        <CalculatorFormFieldItem name='height'>
          <FormNumberInput
            name='height'
            placeholder='Высота в сантиметрах'
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
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
            name='length'
            placeholder='Длина в метрах'
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
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
            <FormTabsList variant='reverse' size='lg'>
              {neonTypes.map((item, index) => (
                <FormTabsTrigger
                  id={`neon-type-${item}`}
                  key={index}
                  value={item}
                  aria-controls={undefined}
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
            name='length'
            placeholder='Элементы неона в штуках'
            allowNegative={false}
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue !== undefined ? floatValue > 0 : true;
            }}
            decimalScale={0}
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
            <FormTabsList variant='reverse' size='lg'>
              {places.map((item, index) => (
                <FormTabsTrigger
                  id={`place-${item}`}
                  key={index}
                  value={item}
                  aria-controls={undefined}
                >
                  {placesNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </CalculatorFormFieldItem>
      </CalculatorSection>
      <CalculatorSection className='items-stretch'>
        <CalculatorHeading id='discount-progressbar' as='h3'>
          Размер вашей скидки
        </CalculatorHeading>
        <CalculatorDiscount />
      </CalculatorSection>
      <CalculatorPrice formData={formData} />
      <OrderModalTrigger ref={triggerRef} className='hidden' />
    </Form>
  );
};
