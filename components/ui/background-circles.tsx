import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type BackgroundCirclesProps = React.SVGAttributes<SVGElement> &
  VariantProps<typeof backgroundCirclesVariants>;

export const backgroundCirclesVariants = cva(
  'pointer-events-none absolute inset-0 size-full',
  {
    variants: {
      size: {
        default: '',
        sm: '',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export const BackgroundCircles = ({
  size = 'default',
  className,
  ...props
}: BackgroundCirclesProps) => {
  return size === 'default' ? (
    <svg
      className={cn(backgroundCirclesVariants({ size, className }))}
      viewBox='0 0 1920 6980'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      overflow='visible'
      preserveAspectRatio='none'
      {...props}
    >
      <rect
        x='0'
        y='0'
        height='100%'
        width='100%'
        fill='url(#bg-circles-pattern)'
      />
      <defs>
        <pattern
          id='bg-circles-pattern'
          viewBox='0 0 1920 6980'
          width='100%'
          height='100%'
        >
          <g filter='url(#bg-circles-filter-1)'>
            <circle
              cx='-479'
              cy='1222'
              r='612'
              fill='url(#bg-circles-linear-gradient-1)'
            />
          </g>
          <g filter='url(#bg-circles-filter-2)'>
            <circle
              cx='2474'
              cy='5568'
              r='612'
              fill='url(#bg-circles-linear-gradient-2)'
            />
          </g>
          <g filter='url(#bg-circles-filter-3)'>
            <circle
              cx='-579'
              cy='4042'
              r='612'
              fill='url(#bg-circles-linear-gradient-3)'
            />
          </g>
          <g filter='url(#bg-circles-filter-4)'>
            <circle
              cx='2433'
              cy='2814'
              r='612'
              fill='url(#bg-circles-linear-gradient-4)'
            />
          </g>
        </pattern>
        <filter
          id='bg-circles-filter-1'
          x='-1891'
          y='-190'
          width='2824'
          height='2824'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur stdDeviation='400' result='blur-1' />
        </filter>
        <filter
          id='bg-circles-filter-2'
          x='1062'
          y='4156'
          width='2824'
          height='2824'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur stdDeviation='400' result='blur-2' />
        </filter>
        <filter
          id='bg-circles-filter-3'
          x='-1991'
          y='2630'
          width='2824'
          height='2824'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur stdDeviation='400' result='blur-3' />
        </filter>
        <filter
          id='bg-circles-filter-4'
          x='1021'
          y='1402'
          width='2824'
          height='2824'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur stdDeviation='400' result='blur-4' />
        </filter>
        <linearGradient
          id='bg-circles-linear-gradient-1'
          x1='-479'
          y1='879.5'
          x2='-180.5'
          y2='2027'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gradient-first)' />
          <stop offset='1' stopColor='var(--gradient-second)' />
        </linearGradient>
        <linearGradient
          id='bg-circles-linear-gradient-2'
          x1='2474'
          y1='5225.5'
          x2='2772.5'
          y2='6373'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gradient-first)' />
          <stop offset='1' stopColor='var(--gradient-second)' />
        </linearGradient>
        <linearGradient
          id='bg-circles-linear-gradient-3'
          x1='-579'
          y1='3699.5'
          x2='-280.5'
          y2='4847'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gradient-first)' />
          <stop offset='1' stopColor='var(--gradient-second)' />
        </linearGradient>
        <linearGradient
          id='bg-circles-linear-gradient-4'
          x1='2433'
          y1='2471.5'
          x2='2731.5'
          y2='3619'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gradient-first)' />
          <stop offset='1' stopColor='var(--gradient-second)' />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      className={cn(backgroundCirclesVariants({ size, className }))}
      viewBox='0 0 1920 2901'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      overflow='visible'
      preserveAspectRatio='none'
      {...props}
    >
      <rect
        x='0'
        y='0'
        height='100%'
        width='100%'
        fill='url(#bg-circles-sm-pattern)'
      />
      <defs>
        <pattern
          id='bg-circles-sm-pattern'
          viewBox='0 0 1920 2901'
          width='100%'
          height='100%'
        >
          <g filter='url(#bg-circles-sm-filter-1)'>
            <circle
              cx='-606'
              cy='924'
              r='612'
              fill='url(#bg-circles-sm-linear-gradient-1)'
            />
          </g>
          <g filter='url(#bg-circles-sm-filter-2)'>
            <circle
              cx='2539'
              cy='1489'
              r='612'
              fill='url(#bg-circles-sm-linear-gradient-2)'
            />
          </g>
        </pattern>
        <filter
          id='bg-circles-sm-filter-1'
          x='-2018'
          y='-488'
          width='2824'
          height='2824'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur stdDeviation='400' result='bg-circles-sm-blur-1' />
        </filter>
        <filter
          id='bg-circles-sm-filter-2'
          x='1127'
          y='77'
          width='2824'
          height='2824'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur stdDeviation='400' result='bg-circles-sm-blur-2' />
        </filter>
        <linearGradient
          id='bg-circles-sm-linear-gradient-1'
          x1='-606'
          y1='581.5'
          x2='-307.5'
          y2='1729'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gradient-first)' />
          <stop offset='1' stopColor='var(--gradient-second)' />
        </linearGradient>
        <linearGradient
          id='bg-circles-sm-linear-gradient-2'
          x1='1927'
          y1='1489'
          x2='3151'
          y2='1489'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='var(--gradient-first)' />
          <stop offset='1' stopColor='var(--gradient-second)' />
        </linearGradient>
      </defs>
    </svg>
  );
};
