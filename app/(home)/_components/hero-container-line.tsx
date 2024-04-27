import React from 'react';

import { cn } from '@/lib/utils';

type HeroContainerLineProps = React.SVGAttributes<SVGElement>;

const HeroForeignGradient = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <foreignObject
      id='gradient'
      className='aspect-square size-full'
      mask={isMobile ? 'url(#clip)' : 'url(#clip-lg)'}
    >
      <div className='size-full scale-[500%]'>
        <div className='size-full origin-center animate-[spin_10s_infinite_linear] [background:conic-gradient(from_0deg,var(--gradient-first)_0%,var(--gradient-second)_25%,var(--gradient-second)_50%,var(--gradient-first)_100%,transparent)]'></div>
      </div>
    </foreignObject>
  );
};

export const HeroContainerLine = ({
  className,
  ...props
}: HeroContainerLineProps) => {
  return (
    <>
      <svg
        className={cn(
          'pointer-events-none absolute inset-0 hidden size-full origin-center scale-x-125 md:block xl:scale-x-110 2xl:scale-100 3xl:mx-auto 3xl:max-w-[1920px]',
          className
        )}
        viewBox='0 0 1920 1171'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        overflow='visible'
        {...props}
      >
        <HeroForeignGradient />
        <path
          className='-translate-y-6 md:translate-y-0'
          d='M72.9999 -64.9999C72.9999 -64.9999 72.9994 432.742 72.9998 761C72.9999 847.285 164.078 965.501 306.5 965.501C364.18 965.501 1570 965.501 1663.5 965.501C1757 965.501 1860 861.5 1860 761C1860 432.742 1860 -47.0001 1860 -47.0001'
          stroke='white'
        />
        <defs>
          <mask id='clip-lg'>
            <path
              className='stroke-[50px] md:stroke-[100px]'
              d='M148.634 -3.99956L148.634 746.5C148.634 746.5 148.634 891.5 322.634 891.5C374.134 891.5 1550.63 891.5 1614.63 891.5C1782.63 891.5 1782.63 746.5 1782.63 746.5L1782.63 -3.99964'
              stroke='white'
              strokeWidth='100'
            />
            <g filter='url(#hero-filter-lg)'>
              <path
                className='stroke-[50px] md:stroke-[100px]'
                d='M148.634 -3.99956L148.634 746.5C148.634 746.5 148.634 891.5 322.634 891.5C374.134 891.5 1550.63 891.5 1614.63 891.5C1782.63 891.5 1782.63 746.5 1782.63 746.5L1782.63 -3.99964'
                stroke='white'
                strokeWidth='100'
              />
            </g>
          </mask>
          <filter
            id='hero-filter-lg'
            x='38.6339'
            y='-63.9995'
            width='1854'
            height='1065.5'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feGaussianBlur stdDeviation='30' result='blur' />
          </filter>
        </defs>
      </svg>
      <svg
        className={cn(
          'pointer-events-none absolute inset-0 size-full origin-center md:hidden',
          className
        )}
        viewBox='0 0 414 783'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        overflow='visible'
        {...props}
      >
        <HeroForeignGradient isMobile />
        <path
          d='M-105.985 4.50023C-105.985 4.50023 -105.985 392.906 -105.985 572.669C-105.984 619.921 -35 684.659 54.5798 684.659C74.4821 684.659 283.119 684.659 362.81 684.659C442.5 684.659 510.614 627.706 510.614 572.669C510.614 392.906 510.615 14.3573 510.615 14.3573'
          stroke='white'
        />
        <defs>
          <mask id='clip'>
            <path
              d='M-11.0001 1.99899L-10.9998 580.34C-10.9998 580.34 -10.9998 630.001 54.59 630.001C65.125 630.001 346.408 630 359.5 630C423.868 630 423.868 580.34 423.868 580.34L423.867 1.99966'
              stroke='white'
              strokeWidth='50'
            />
            <g filter='url(#hero-filter)'>
              <path
                d='M-11.0001 1.99899L-10.9998 580.34C-10.9998 580.34 -10.9998 630.001 54.59 630.001C65.125 630.001 346.408 630 359.5 630C423.868 630 423.868 580.34 423.868 580.34L423.867 1.99966'
                stroke='white'
                strokeWidth='50'
              />
            </g>
          </mask>
          <filter
            id='hero-filter'
            x='-76'
            y='-38.001'
            width='564.867'
            height='733.001'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feGaussianBlur stdDeviation='20' result='blur' />
          </filter>
        </defs>
      </svg>
    </>
  );
};
