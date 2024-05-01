'use client';

import React, { useContext, useEffect, useMemo } from 'react';
import { motion, useAnimate, useMotionTemplate } from 'framer-motion';

import { predefinedSmartColors } from '@/config/home/constructor';
import { cn, toHSLString } from '@/lib/utils';
import { ConstructorContext } from '@/app/(home)/_components/constructor/constructor-provider';

type ConstructorCircleProps = React.SVGAttributes<SVGElement>;

export const ConstructorCircle = ({
  className,
  ...props
}: ConstructorCircleProps) => {
  const {
    neonType,
    colorIndex,
    setColorIndex,
    constructorColors,
    constructorSmartColors,
    isPaused,
    lastColorIndex,
  } = useContext(ConstructorContext);
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
        constructorColors[colorIndex ?? 0],
      ];

      const gradientColors = processedConstructorColors.map(
        (item, index) => `${toHSLString(item)} ${25 * index}%`
      );

      return gradientColors.join(',');
    } else {
      const processedConstructorColors = [
        ...constructorSmartColors,
        constructorSmartColors[0],
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
        (360 / predefinedSmartColors.length) * (colorIndex ?? lastColorIndex),
    };
    const options = { duration: 0.5 };
    animate('#selection', rotate, options);
    animate('#selection-stroke', rotate, options);
  }, [colorIndex, animate, lastColorIndex]);

  return (
    <svg
      ref={scope}
      className={cn('pointer-events-none z-20 size-full', className)}
      viewBox='0 0 705 705'
      fill='none'
      {...props}
    >
      <foreignObject
        className='size-[705px]'
        x={0}
        y={0}
        width='705'
        height='705'
        mask='url(#mask-foreign)'
      >
        <motion.div className='size-[705px]' style={{ background: gradient }} />
      </foreignObject>
      <path
        d='M51.8864 352.326C51.8864 517.897 186.452 652.114 352.441 652.114C518.431 652.114 652.996 517.897 652.996 352.326C652.996 186.755 518.431 52.5375 352.441 52.5375C186.452 52.5375 51.8864 186.755 51.8864 352.326Z'
        stroke='#383838'
        strokeWidth='2.22719'
        strokeLinejoin='round'
      />
      <motion.path
        id='selection-stroke'
        className={cn(
          'transition-opacity duration-500',
          isPaused ? 'opacity-100 delay-500' : 'opacity-0'
        )}
        style={{ originX: '50%', originY: '50%' }}
        d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z'
        stroke='white'
        strokeWidth='8'
        mask='url(#mask)'
      />
      {constructorSmartColors.map((_, index) => (
        <React.Fragment key={index}>
          <g
            className={cn(
              'origin-center transition-opacity duration-500',
              !isPaused ? 'opacity-0' : 'delay-500'
            )}
            style={{
              transform: `rotate(${(360 / predefinedSmartColors.length) * index}deg)`,
            }}
          >
            <motion.text
              className={cn(
                'font-unbounded transition-opacity duration-500',
                colorIndex === index ? 'opacity-100' : 'opacity-10'
              )}
              style={{
                rotate: -(360 / predefinedSmartColors.length) * index,
              }}
              fill='white'
              xmlSpace='preserve'
              fontSize='63.1579'
              letterSpacing='0em'
            >
              <tspan x='415' y='190'>
                {index + 1}
              </tspan>
            </motion.text>
          </g>
          <path
            id={`section-${index}`}
            className='pointer-events-auto absolute inset-0 z-20 origin-center opacity-0'
            style={{
              rotate: `${(360 / predefinedSmartColors.length) * index}deg`,
            }}
            d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z'
            fill='white'
            onClick={() => handleSelectSection(index)}
          />
        </React.Fragment>
      ))}
      <defs>
        <mask
          id='mask-foreign'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          fill='none'
        >
          <g filter='url(#constructor-filter)'>
            <rect
              className={cn(
                'transition-all duration-500',
                isPaused ? '' : '[stroke-opacity:0.8]'
              )}
              x='144.806'
              y='145.08'
              width='415.27'
              height='414.492'
              rx='207.246'
              stroke='white'
              strokeOpacity='0.4'
              strokeWidth='111.359'
              strokeLinejoin='round'
            />
          </g>
          <rect
            className={cn(
              'transition-all duration-500',
              isPaused ? '' : '[stroke-opacity:0.8]'
            )}
            x='144.806'
            y='145.08'
            width='415.27'
            height='414.492'
            rx='207.246'
            stroke='white'
            strokeOpacity='0.2'
            strokeWidth='111.359'
            strokeLinejoin='round'
          />
          <mask
            id='mask'
            maskUnits='userSpaceOnUse'
            x='349'
            y='47'
            width='245'
            height='240'
            fill='black'
          >
            <rect fill='white' x='349' y='47' width='245' height='240' />
            <path d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z' />
          </mask>
          <mask
            id='mask2'
            maskUnits='userSpaceOnUse'
            x='353'
            y='51'
            width='235'
            height='230'
          >
            <path
              d='M353 51C398.069 51 442.559 61.1546 483.165 80.7093C523.771 100.264 559.449 128.717 587.549 163.953L440.956 280.857C430.418 267.644 417.039 256.974 401.812 249.641C386.585 242.308 369.901 238.5 353 238.5L353 51Z'
              fill='white'
            />
          </mask>
          <motion.g
            id='selection'
            className={cn(
              'transition-opacity duration-500',
              isPaused ? 'opacity-100 delay-500' : 'opacity-0'
            )}
            mask='url(#mask2)'
          >
            <g filter='url(#constructor-filter)'>
              <rect
                x='144.806'
                y='145.08'
                width='415.27'
                height='414.492'
                rx='207.246'
                stroke='white'
                strokeWidth='111.359'
                strokeLinejoin='round'
              />
            </g>
            <rect
              x='144.806'
              y='145.08'
              width='415.27'
              height='414.492'
              rx='207.246'
              stroke='white'
              strokeOpacity='0.8'
              strokeWidth='111.359'
              strokeLinejoin='round'
            />
          </motion.g>
        </mask>
        <filter
          id='constructor-filter'
          x='0.0390778'
          y='0.312881'
          width='704.804'
          height='704.026'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur stdDeviation='44.5438' result='effect1' />
        </filter>
      </defs>
    </svg>
  );
};
