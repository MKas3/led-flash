import React from 'react';

import { Heading } from '@/components/ui/heading';

type ServiceCardTitleProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const ServiceCardTitle = ({ ...props }: ServiceCardTitleProps) => {
  return <Heading className='text-xl md:text-2xl' as='h3' {...props} />;
};
