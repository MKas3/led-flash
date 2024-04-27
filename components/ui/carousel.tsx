'use client';

import type { UseEmblaCarouselType } from 'embla-carousel-react';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

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
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
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

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
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
>(({ wrapperClassName, className, ...props }, ref) => {
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
      role='group'
      aria-roledescription='slide'
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute  size-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className='size-4' />
      <span className='sr-only'>Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className='size-4' />
      <span className='sr-only'>Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export const useCarouselDot = (api: CarouselApi | undefined) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  const onInit = React.useCallback((api: CarouselApi) => {
    if (api) setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (api) setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    api.on('reInit', onInit);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
  }, [api, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
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
      className='size-2 origin-center rounded-full bg-foreground opacity-50 transition duration-500 data-[active=true]:scale-125 data-[active=true]:opacity-100 md:size-3'
      variant='ghost'
      {...props}
    >
      <span className='sr-only'>Button</span>
    </Comp>
  );
});
CarouselDot.displayName = 'CarouselDot';

const CarouselDotsContent = React.forwardRef<
  React.ElementRef<typeof CarouselContent>,
  React.ComponentPropsWithoutRef<typeof CarouselContent> & {
    selectedIndex: number;
  }
>(({ selectedIndex, className, ...props }, ref) => {
  const { api } = useCarousel();

  React.useEffect(() => {
    api?.scrollTo(selectedIndex);
  }, [api, selectedIndex]);

  return (
    <CarouselContent
      ref={ref}
      wrapperClassName='overflow-visible w-full'
      className={cn('ml-0 h-fit', className)}
      {...props}
    />
  );
});
CarouselDotsContent.displayName = 'CarouselDotsContent';

const CarouselDots = React.forwardRef<
  React.ElementRef<typeof Carousel>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api } = useCarousel();
  const { scrollSnaps, selectedIndex } = useCarouselDot(api);

  return (
    <Carousel
      ref={ref}
      className='pointer-events-none mx-auto mt-5 flex h-fit w-16 items-center justify-center p-1.5 md:w-24'
      opts={{
        align: 'center',
        containScroll: 'keepSnaps',
      }}
      {...props}
    >
      <CarouselDotsContent selectedIndex={selectedIndex} className={className}>
        {(!scrollSnaps || scrollSnaps.length === 0) && <CarouselItem />}
        {(scrollSnaps.length <= 2 ? [0, 0, 0] : scrollSnaps).map((_, index) => (
          <CarouselItem
            className='flex size-4 basis-1/3 scale-0 items-center justify-center pl-0 opacity-0 transition duration-700 data-[in-view=true]:scale-100 data-[is-edge=true]:scale-50 data-[in-view=true]:opacity-100 md:size-6'
            key={index}
            data-in-view={
              (selectedIndex === 0 && index <= 2) ||
              (selectedIndex === scrollSnaps.length - 1 &&
                index >= scrollSnaps.length - 3) ||
              (index >= selectedIndex - 2 && index <= selectedIndex + 2)
            }
            data-is-edge={Math.abs(selectedIndex - index) === 2}
          >
            <CarouselDot data-active={index === selectedIndex} disabled />
          </CarouselItem>
        ))}
      </CarouselDotsContent>
    </Carousel>
  );
});
CarouselDots.displayName = 'CarouselDots';

export {
  type CarouselApi,
  useCarousel,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
};
