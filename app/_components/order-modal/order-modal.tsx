import React from 'react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';
import { FooterForm } from '@/app/_components/footer/footer-form';

type OrderModalProps = React.HTMLAttributes<HTMLDialogElement>;

export const OrderModal = ({
  className,
  children,
  ...props
}: OrderModalProps) => {
  return (
    <Dialog {...props}>
      {children}
      <DialogContent className='p-6'>
        <Heading className='text-center' as='h2'>
          Заказать <GradientText>неоновую</GradientText> вывеску
        </Heading>
        <FooterForm size='sm' />
      </DialogContent>
    </Dialog>
  );
};
