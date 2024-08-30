'use client';

import type { UseEmblaCarouselType } from 'embla-carousel-react';

import { createContext, useContext, useMemo } from 'react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  orientation?: 'horizontal' | 'vertical';
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = CarouselProps & {
  api: ReturnType<typeof useEmblaCarousel>[1];
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  scrollNext: () => void;
  scrollPrev: () => void;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      className,
      opts,
      orientation = 'horizontal',
      plugins,
      setApi,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y'
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    const contextValue = useMemo(() => ({
      api,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      orientation:
        orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
      scrollNext,
      scrollPrev
    }), [
      api,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      orientation,
      scrollNext,
      scrollPrev
    ]);

    return (
      <CarouselContext.Provider
        value={contextValue}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          aria-roledescription='carousel'
          role='region'
          onKeyDownCapture={handleKeyDown}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    wrapperClassName?: string;
  }
>(({ className, wrapperClassName, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className={cn('overflow-hidden', wrapperClassName)}>
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      aria-roledescription='slide'
      role='group'
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, size = 'icon', variant = 'ghost', ...props }, ref) => {
  const { canScrollPrev, orientation, scrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      className={cn(
        'absolute size-10 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      size={size}
      variant={variant}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className='size-full' />
      <span className='sr-only'>Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, size = 'icon', variant = 'ghost', ...props }, ref) => {
  const { canScrollNext, orientation, scrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      className={cn(
        'absolute size-10 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      size={size}
      variant={variant}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className='size-full' />
      <span className='sr-only'>Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export const useCarouselDotsRoot = (api: CarouselApi | undefined) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  const onInit = React.useCallback(() => {
    if (api) setScrollSnaps(api.scrollSnapList());
  }, [api]);

  const onSelect = React.useCallback(() => {
    if (api) setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    onInit();
    onSelect();
    api.on('reInit', onInit);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('reInit', onInit);
      api.off('reInit', onSelect);
      api.off('select', onSelect);
    };
  }, [api, onInit, onSelect]);

  return {
    scrollSnaps,
    selectedIndex,
    onDotButtonClick
  };
};

type CarouselDotsContext = {
  scrollSnaps: number[];
  selectedIndex: number;
};

const carouselDotsContext = createContext<CarouselDotsContext>({} as CarouselDotsContext);

const useCarouselDots = () => {
  return useContext(carouselDotsContext);
};

const CarouselDot = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
  }
>(({ disabled, children, ...props }, ref) => {
  const Comp = disabled ? 'span' : Button;

  return (
    <Comp
      ref={ref}
      className='size-2 origin-center rounded-full bg-foreground opacity-50 transition duration-500 group-data-[active=true]:scale-125 group-data-[active=true]:opacity-100 lg:size-3'
      variant='ghost'
      {...props}
    >
      <span className='sr-only'>Button</span>
    </Comp>
  );
});
CarouselDot.displayName = 'CarouselDot';

const CarouselDotButton = React.forwardRef<
  React.ElementRef<typeof CarouselItem>,
  React.ComponentPropsWithoutRef<typeof CarouselItem> & { index: number }
>(({ className, index, ...props }, ref) => {
  const { scrollSnaps, selectedIndex } = useCarouselDots();

  return (
    <CarouselItem
      ref={ref}
      className={cn('flex size-4 basis-1/3 group scale-0 items-center justify-center pl-0 opacity-0 transition duration-700 data-[in-view=true]:scale-100 data-[is-edge=true]:scale-50 data-[in-view=true]:opacity-100 lg:size-6', className)}
      data-active={selectedIndex === index}
      data-in-view={
        (selectedIndex === 0 && index <= 2)
        || (selectedIndex === scrollSnaps.length - 1
        && index >= scrollSnaps.length - 3)
        || (index >= selectedIndex - 2 && index <= selectedIndex + 2)
      }
      data-is-edge={Math.abs(selectedIndex - index) === 2}
      {...props}
    />
  );
});
CarouselDotButton.displayName = 'CarouselDotButton';

const CarouselDotsContent = React.forwardRef<
  React.ElementRef<typeof CarouselContent>,
  React.ComponentPropsWithoutRef<typeof CarouselContent>
>(({ className, children, ...props }, ref) => {
  const { api } = useCarousel();
  const { scrollSnaps, selectedIndex } = useCarouselDots();

  React.useEffect(() => {
    api?.scrollTo(selectedIndex);
  }, [api, selectedIndex]);

  return (
    <CarouselContent
      ref={ref}
      className={cn('ml-0 h-fit', className)}
      wrapperClassName='overflow-visible w-full'
      {...props}
    >
      {(!scrollSnaps || scrollSnaps.length === 0) && <CarouselItem />}
      {children}
    </CarouselContent>
  );
});
CarouselDotsContent.displayName = 'CarouselDotsContent';

const CarouselDotsSnaps = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
  const { scrollSnaps } = useCarouselDots();

  return (
    <>
      {(scrollSnaps.length <= 2 ? [0, 0, 0] : scrollSnaps).map((_, index) => (
        <CarouselDotButton
          key={index}
          className={className}
          index={index}
        >
          {children}
        </CarouselDotButton>
      ))}
    </>
  );
};

const CarouselDots = React.forwardRef<
  React.ElementRef<typeof Carousel>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api } = useCarousel();
  const { scrollSnaps, selectedIndex } = useCarouselDotsRoot(api);

  const contextValue = useMemo(() => ({
    scrollSnaps,
    selectedIndex
  }), [
    scrollSnaps,
    selectedIndex
  ]);

  return (
    <carouselDotsContext.Provider value={contextValue}>
      <Carousel
        ref={ref}
        className={cn('pointer-events-none mx-auto mt-5 flex h-fit w-16 items-center justify-center p-1.5 lg:w-24', className)}
        opts={{
          align: 'center',
          containScroll: 'keepSnaps'
        }}
        {...props}
      >
        <CarouselDotsContent>
          <CarouselDotsSnaps>
            <CarouselDot disabled />
          </CarouselDotsSnaps>
        </CarouselDotsContent>
      </Carousel>
    </carouselDotsContext.Provider>
  );
});
CarouselDots.displayName = 'CarouselDots';

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselDot,
  CarouselDotButton,
  CarouselDots,
  CarouselDotsContent,
  CarouselDotsSnaps,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel
};
