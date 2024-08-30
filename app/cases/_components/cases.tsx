import React from 'react';

import { Case } from '@/app/cases/_components/case';
import { CaseImage } from '@/app/cases/_components/case-image';
import { CaseImages } from '@/app/cases/_components/case-images';
import { CaseTitle } from '@/app/cases/_components/case-title';
import { CasesLeft } from '@/app/cases/_components/cases-left';
import { CasesMouseFollower } from '@/app/cases/_components/cases-mouse-follower';
import { CasesMouseFollowerProvider } from '@/app/cases/_components/cases-mouse-follower-provider';
import { CasesRight } from '@/app/cases/_components/cases-right';
import { cases } from '@/config/cases/cases';

import { cn } from '@/lib/utils';

type CasesProps = React.ComponentPropsWithoutRef<'div'> & {
  disableMouse?: boolean;
};

export const Cases = ({ className, disableMouse, ...props }: CasesProps) => {
  return (
    <div className={cn('group grid gap-y-20 grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28', className)} {...props}>
      <CasesMouseFollowerProvider>
        {
          !disableMouse && <CasesMouseFollower />
        }
        <CasesLeft>
          {cases.left.map((leftCase) => (
            <Case key={leftCase.title}>
              <CaseImages>
                {leftCase.images.map((image) => (
                  <CaseImage
                    key={image.src}
                    alt={image.alt}
                    height={image.height}
                    src={image.src}
                    variant='lg'
                    width={image.width}
                  />
                ))}
              </CaseImages>
              <CaseTitle>{leftCase.title}</CaseTitle>
            </Case>
          ))}
        </CasesLeft>
        <CasesRight>
          {cases.right.map((rightCase) => (
            <Case key={rightCase.title}>
              <CaseImages>
                {rightCase.images.map((image) => (
                  <CaseImage
                    key={image.src}
                    alt={image.alt}
                    src={image.src}
                    variant='sm'
                    fill
                  />
                ))}
              </CaseImages>
              <CaseTitle>{rightCase.title}</CaseTitle>
            </Case>
          ))}
        </CasesRight>
      </CasesMouseFollowerProvider>
    </div>
  );
};
