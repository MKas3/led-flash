'use client';

import React, { useContext, useEffect, useMemo } from 'react';

import { constructorContext } from '@/app/(home)/_components/constructor/constructor-provider';
import { predefinedSmartColors } from '@/config/home/constructor';
import { motion, useAnimate, useMotionTemplate } from 'framer-motion';

import { cn, toHSLString } from '@/lib/utils';

type ConstructorCircleProps = React.SVGAttributes<SVGElement>;

export const ConstructorCircle = ({
  className,
  ...props
}: ConstructorCircleProps) => {
  const {
    colorIndex,
    constructorColors,
    constructorSmartColors,
    isPaused,
    lastColorIndex,
    neonType,
    setColorIndex
  } = useContext(constructorContext);
  const [scope, animate] = useAnimate();

  const colors = useMemo(() => {
    if (neonType === 'colors' || neonType === 'rgb') {
      const processedConstructorColors = [
        constructorColors[colorIndex ?? 0],
        constructorColors[colorIndex ?? 0].with(
          2,
          Math.min(constructorColors[colorIndex ?? 0][2] + 20, 100)
        ) as [number, number, number],
        constructorColors[colorIndex ?? 0],
        constructorColors[colorIndex ?? 0]
      ];

      const gradientColors = processedConstructorColors.map(
        (item, index) => `${toHSLString(item)} ${25 * index}%`
      );

      return gradientColors.join(',');
    } else {
      const processedConstructorColors = [
        ...constructorSmartColors,
        constructorSmartColors[0]
      ];
      const colorOffset = 100 / constructorSmartColors.length;
      const gradientColors = processedConstructorColors.map(
        (item, index) => `${toHSLString(item)} ${colorOffset * index}%`
      );
      return gradientColors.join(',');
    }
  }, [neonType, constructorColors, constructorSmartColors, colorIndex]);

  const gradient = useMotionTemplate`conic-gradient(from ${180 / constructorSmartColors.length}deg,${colors})`;

  const handleSelectSection = (index: number) => {
    if (neonType !== 'smart') return;

    setColorIndex(index);
  };

  useEffect(() => {
    const rotate = {
      rotate:
        (360 / predefinedSmartColors.length) * (colorIndex ?? lastColorIndex)
    };
    const options = { duration: 0.5 };
    animate('#selection', rotate, options);
    animate('#selection-stroke', rotate, options);
  }, [colorIndex, animate, lastColorIndex]);

  return (
    <svg
      ref={scope}
      className={cn('pointer-events-none z-20 size-full', className)}
      fill='none'
      viewBox='0 0 705 705'
      {...props}
    >
      <foreignObject
        className='size-[705px]'
        height='705'
        mask='url(#mask-foreign)'
        width='705'
        x={0}
        y={0}
      >
        <motion.div className='size-[705px]' style={{ background: gradient }} />
      </foreignObject>
      <path
        d='M51.8864 352.326C51.8864 517.897 186.452 652.114 352.441 652.114C518.431 652.114 652.996 517.897 652.996 352.326C652.996 186.755 518.431 52.5375 352.441 52.5375C186.452 52.5375 51.8864 186.755 51.8864 352.326Z'
        stroke='#383838'
        strokeLinejoin='round'
        strokeWidth='2.22719'
      />
      <motion.path
        className={cn(
          'transition-opacity duration-500',
          isPaused ? 'opacity-100 delay-500' : 'opacity-0'
        )}
        d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z'
        id='selection-stroke'
        mask='url(#mask)'
        stroke='white'
        strokeWidth='8'
        style={{ originX: '50%', originY: '50%' }}
      />
      {constructorSmartColors.map((_, index) => (
        <React.Fragment key={index}>
          <g
            className={cn(
              'origin-center transition-opacity duration-500',
              !isPaused ? 'opacity-0' : 'delay-500'
            )}
            style={{
              transform: `rotate(${(360 / predefinedSmartColors.length) * index}deg)`
            }}
          >
            <motion.text
              className={cn(
                'font-unbounded transition-opacity duration-500',
                colorIndex === index ? 'opacity-100' : 'opacity-10'
              )}
              fill='white'
              fontSize='63.1579'
              letterSpacing='0em'
              style={{
                rotate: -(360 / predefinedSmartColors.length) * index
              }}
              xmlSpace='preserve'
            >
              <tspan x='415' y='190'>
                {index + 1}
              </tspan>
            </motion.text>
          </g>
          <path
            className='pointer-events-auto absolute inset-0 z-20 origin-center opacity-0'
            d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z'
            fill='white'
            id={`section-${index}`}
            style={{
              rotate: `${(360 / predefinedSmartColors.length) * index}deg`
            }}
            onClick={() => handleSelectSection(index)}
          />
        </React.Fragment>
      ))}
      <defs>
        <mask
          fill='none'
          id='mask-foreign'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
        >
          <g filter='url(#constructor-filter)'>
            <rect
              className={cn(
                'transition-all duration-500',
                isPaused ? '' : '[stroke-opacity:0.8]'
              )}
              height='414.492'
              rx='207.246'
              stroke='white'
              strokeLinejoin='round'
              strokeOpacity='0.4'
              strokeWidth='111.359'
              width='415.27'
              x='144.806'
              y='145.08'
            />
          </g>
          <rect
            className={cn(
              'transition-all duration-500',
              isPaused ? '' : '[stroke-opacity:0.8]'
            )}
            height='414.492'
            rx='207.246'
            stroke='white'
            strokeLinejoin='round'
            strokeOpacity='0.2'
            strokeWidth='111.359'
            width='415.27'
            x='144.806'
            y='145.08'
          />
          <mask
            fill='black'
            height='240'
            id='mask'
            maskUnits='userSpaceOnUse'
            width='245'
            x='349'
            y='47'
          >
            <rect fill='white' height='240' width='245' x='349' y='47' />
            <path d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z' />
          </mask>
          <mask
            height='230'
            id='mask2'
            maskUnits='userSpaceOnUse'
            width='235'
            x='353'
            y='51'
          >
            <path
              d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z'
              fill='white'
            />
          </mask>
          <motion.g
            className={cn(
              'transition-opacity duration-500',
              isPaused ? 'opacity-100 delay-500' : 'opacity-0'
            )}
            id='selection'
            mask='url(#mask2)'
          >
            <g filter='url(#constructor-filter)'>
              <rect
                height='414.492'
                rx='207.246'
                stroke='white'
                strokeLinejoin='round'
                strokeWidth='111.359'
                width='415.27'
                x='144.806'
                y='145.08'
              />
            </g>
            <rect
              height='414.492'
              rx='207.246'
              stroke='white'
              strokeLinejoin='round'
              strokeOpacity='0.8'
              strokeWidth='111.359'
              width='415.27'
              x='144.806'
              y='145.08'
            />
          </motion.g>
        </mask>
        <filter
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
          height='704.026'
          id='constructor-filter'
          width='704.804'
          x='0.0390778'
          y='0.312881'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            in='SourceGraphic'
            in2='BackgroundImageFix'
            mode='normal'
            result='shape'
          />
          <feGaussianBlur result='effect1' stdDeviation='44.5438' />
        </filter>
      </defs>
    </svg>
  );
};
