'use client';

import React, { useState } from 'react';

import { FooterForm } from '@/app/_components/footer/footer-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';

type OrderModalProps = React.HTMLAttributes<HTMLDialogElement>;

export const OrderModal = ({
  className,
  children,
  ...props
}: OrderModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} {...props}>
      {children}
      <DialogContent className='p-6 md:p-9'>
        <Heading
          className='text-center text-base md:text-3xl lg:text-3xl 2xl:text-3xl'
          as='h2'
        >
          Заказать
          {' '}
          <br />
          <GradientText>неоновую</GradientText>
          {' '}
          вывеску
        </Heading>
        <FooterForm size='sm' variant='muted' onSubmit={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
