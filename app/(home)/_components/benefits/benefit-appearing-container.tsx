import React from 'react';

import { AppearingContainer } from '@/components/ui/appearing-container';

type BenefitAppearingContainerProps = React.ComponentPropsWithoutRef<
  typeof AppearingContainer
>;

export const BenefitAppearingContainer = ({
  ...props
}: BenefitAppearingContainerProps) => {
  return (
    <AppearingContainer
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      variant='child'
      {...props}
    />
  );
};
