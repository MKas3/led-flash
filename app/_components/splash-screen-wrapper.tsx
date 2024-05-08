'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { splashAnimation } from '@/config/animation';
import { cn } from '@/lib/utils';
import { useFirstLoading } from '@/hooks/use-first-loading';
import { WordAnimationWrapper } from '@/components/ui/word-animation-wrapper';

type SplashScreenWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const SplashScreenWrapper = ({
  children,
  ...props
}: SplashScreenWrapperProps) => {
  const isFirstLoading = useFirstLoading();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const currentStep = isFirstLoading
      ? splashAnimation.step.first
      : splashAnimation.step.default;

    const timer = setInterval(
      () =>
        setLoadingProgress((prevState) => {
          if (prevState >= splashAnimation.from.end) clearInterval(timer);

          return prevState + currentStep;
        }),
      splashAnimation.stepInterval
    );

    return () => {
      clearInterval(timer);
    };
  }, [isFirstLoading, setLoadingProgress]);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ease-in',
          loadingProgress >= splashAnimation.from.nonInteractive &&
            'pointer-events-none',
          loadingProgress >= splashAnimation.from.opacity && 'opacity-0'
        )}
        {...props}
      >
        <WordAnimationWrapper
          key={isFirstLoading ? '0' : '1'}
          className='font-unbounded text-4xl font-medium'
          staggerChildren={
            isFirstLoading
              ? splashAnimation.wordsStagger.first
              : splashAnimation.wordsStagger.default
          }
        >
          Добрый день
        </WordAnimationWrapper>
        <div className='absolute inset-0 origin-center animate-[spin_5s_linear_infinite_reverse]'>
          <svg
            className='size-full scale-200 overflow-visible object-contain md:scale-100'
            viewBox='0 0 1920 1080'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            overflow='visible'
            preserveAspectRatio='xMidYMid meet'
          >
            <motion.path
              className='[stroke-dasharray:20000]'
              opacity='0.5'
              d='M993.454 564.353C995.549 587.968 951.696 600.899 928.966 564.353C904.397 532.07 922.462 457.103 993.454 435.46C1060.32 409.837 1166.12 459.022 1186.92 564.353C1213.41 665.633 1133.41 802.265 993.454 822.156C857.85 849.53 689.811 738.672 671.014 564.353C642.521 394.289 784.763 195.585 993.454 177.657C1198.1 148.32 1427.84 321.205 1444.87 564.353C1475.18 803.246 1271.19 1063.99 993.454 1079.95C719.824 1111.25 428.173 876.294 413.064 564.353C380.881 256.472 646.737 -65.9812 993.454 -80.1388C1335.8 -113.203 1689.73 183.424 1702.82 564.353C1736.97 941.028 1409.01 1325.56 993.454 1337.74C582.081 1372.78 166.412 1014.11 155.111 564.353C119.202 118.858 508.879 -327.666 993.454 -337.937C1473.7 -374.928 1951.44 45.813 1960.78 564.353C1998.69 1078.84 1546.87 1587.07 993.454 1595.55C444.386 1634.34 -95.4714 1151.88 -102.841 564.353C-142.557 -18.9226 371.095 -589.228 993.454 -595.734'
              stroke='url(#loader-radial-gradient)'
              strokeWidth='56.013'
              strokeLinecap='round'
              initial={{ strokeDashoffset: 20000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.5, ease: 'circIn' }}
            />
            <defs>
              <radialGradient
                id='loader-radial-gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(929 501) rotate(90) scale(1096.73 1034)'
              >
                <stop stopColor='white' stopOpacity='0' />
                <stop offset='0.88' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      {children}
    </>
  );
};
