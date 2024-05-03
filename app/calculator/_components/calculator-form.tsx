'use client';

import React, { useEffect } from 'react';
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
import { FormFieldItem } from '@/components/ui/form/form-field-item';
import { FormNumberInput } from '@/components/ui/form/form-number-input';
import {
  FormTabs,
  FormTabsList,
  FormTabsTrigger,
} from '@/components/ui/form/form-tabs';
import { Heading } from '@/components/ui/heading';
import { CalculatorDiscount } from '@/app/calculator/_components/calculator-discount';
import { CalculatorPrice } from '@/app/calculator/_components/calculator-price';

type CalculatorFormProps = Omit<
  React.ComponentPropsWithoutRef<typeof Form>,
  'form' | 'onSubmit'
>;

export const CalculatorForm = ({
  className,
  ...props
}: CalculatorFormProps) => {
  const form = useZodForm(calculatorFormSchema);
  const formData = useWatch(form);

  const handleSubmit = (data: CalculatorFormSchema) => {
    toast.success(`Complete: ${JSON.stringify(data)}`);
  };

  return (
    <Form
      className={cn(
        '-mx-4 flex flex-col gap-y-9 font-poppins *:flex *:w-full *:shrink-0 *:flex-col  *:items-center  *:gap-y-4 *:text-sm md:mx-0 md:*:items-stretch md:*:text-base lg:px-2 lg:*:text-lg xl:px-20 xl:*:text-xl 2xl:px-24 2xl:*:text-2xl [&&_>_div_>_div]:flex [&_:where(input,button)]:!text-[length:inherit] [&_>_div_>_div]:w-full [&_>_div_>_div]:flex-col [&_>_div_>_div]:items-center md:[&_>_div_>_div]:items-stretch [&_h3]:font-normal [&_input]:w-full [&_input]:placeholder:!text-[length:inherit] ',
        className
      )}
      form={form}
      onSubmit={handleSubmit}
      {...props}
    >
      <div>
        <Heading as='h3'>Выберите тип подложки</Heading>
        <FormFieldItem<CalculatorFormSchema> name='substrateType'>
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
        </FormFieldItem>
      </div>
      <div>
        <Heading as='h3'>Выберите размеры подложки</Heading>
        <FormFieldItem<CalculatorFormSchema> name='width'>
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
        </FormFieldItem>
        <FormFieldItem<CalculatorFormSchema> name='height'>
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
        </FormFieldItem>
      </div>
      <div>
        <Heading as='h3'>Выберите длину гибкого неона</Heading>
        <FormFieldItem<CalculatorFormSchema> name='length'>
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
        </FormFieldItem>
      </div>
      <div>
        <Heading as='h3'>Выберите тип неона</Heading>
        <FormFieldItem<CalculatorFormSchema> name='neonType'>
          <FormTabs defaultValue={calculatorFormDefaults.neonType}>
            <FormTabsList variant='reverse' size='lg'>
              {neonTypes.map((item, index) => (
                <FormTabsTrigger
                  id={`neon-type-${item}`}
                  key={index}
                  className='font-poppins text-2xl font-normal'
                  value={item}
                  aria-controls={undefined}
                >
                  {neonTypesNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </FormFieldItem>
      </div>
      <div>
        <Heading as='h3'>Количество отдельных элементов неона</Heading>
        <FormFieldItem<CalculatorFormSchema> name='count'>
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
        </FormFieldItem>
      </div>
      <div>
        <Heading as='h3'>Место использования вывески</Heading>
        <FormFieldItem<CalculatorFormSchema> name='place'>
          <FormTabs defaultValue={calculatorFormDefaults.place}>
            <FormTabsList variant='reverse' size='lg'>
              {places.map((item, index) => (
                <FormTabsTrigger
                  id={`place-${item}`}
                  key={index}
                  className='font-poppins text-2xl font-normal'
                  value={item}
                  aria-controls={undefined}
                >
                  {placesNamings.at(index)}
                </FormTabsTrigger>
              ))}
            </FormTabsList>
          </FormTabs>
        </FormFieldItem>
      </div>
      <div>
        <Heading id='discount-progressbar' as='h3'>
          Размер вашей скидки
        </Heading>
        <CalculatorDiscount />
      </div>
      <CalculatorPrice formData={formData} />
    </Form>
  );
};
