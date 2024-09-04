'use client';

import React, { useState } from 'react';

import { CommentsAddForm } from '@/app/(home)/_components/comments/comments-add-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { GradientText } from '@/components/ui/gradient-text';
import { Heading } from '@/components/ui/heading';

type CommentsAddModalProps = React.HTMLAttributes<HTMLDialogElement>;

export const CommentsAddModal = ({
  className,
  children,
  ...props
}: CommentsAddModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} {...props}>
      {children}
      <DialogContent className='gap-y-6 p-6 md:p-9'>
        <Heading
          className='text-center text-base md:text-3xl lg:text-3xl 2xl:text-3xl'
          as='h2'
        >
          Оставьте
          {' '}
          <GradientText>отзыв</GradientText>
          {' '}
          о
          <br />
          нашей работе
        </Heading>
        <CommentsAddForm onSubmit={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
