'use client';

import React, { useEffect, useRef, useState } from 'react';

import { OrderModalTrigger } from '@/app/_components/order-modal/order-modal-trigger';
import Icon from '@/components/ui/icon';
import { type Variants, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const contactVariants: Variants = {
  animate: {
    opacity: 0
  },
  initial: {
    opacity: 1
  }
};

type ContactProps = React.ComponentPropsWithoutRef<typeof OrderModalTrigger>;

export const Contact = ({ className, ...props }: ContactProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const contactElement = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom >= 5);
      },
      {
        root: null
      }
    );

    observer.observe(contactElement);

    return () => {
      observer.unobserve(contactElement);
    };
  }, []);

  return (
    <>
      <div ref={ref} className='sticky bottom-[-1vh]' />
      <motion.div className='fixed bottom-16 right-16 z-20 ml-auto flex size-0 items-center justify-center text-foreground transition-transform hover:scale-125 md:bottom-24 md:right-24' animate={visible ? 'initial' : 'animate'} initial='initial' variants={contactVariants}>
        <OrderModalTrigger className={cn('delay-1500 duration-1000 fill-mode-both animate-in fade-in-0 flex items-center p-2 gap-3 md:gap-0 shrink-0 overflow-hidden justify-center size-12 md:size-16 rounded-full bg-black border-4 border-gradient-second', className)} size='none' {...props}>
          <Icon.PhoneCalling />
          <span className='sr-only'>Связаться с нами</span>
        </OrderModalTrigger>
      </motion.div>
    </>
  );
};
