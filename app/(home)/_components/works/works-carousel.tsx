import { cn } from '@/lib/utils';
import { Carousel, CarouselDots } from '@/components/ui/carousel';
import { WorksCarouselContent } from '@/app/(home)/_components/works/works-carousel-content';

type WorksCarouselProps = React.ComponentPropsWithoutRef<typeof Carousel>;

export const WorksCarousel = ({
  className,
  children,
  ...props
}: WorksCarouselProps) => {
  return (
    <Carousel
      className={cn('', className)}
      opts={{
        align: 'center',
        slidesToScroll: 1,
        containScroll: 'keepSnaps',
        skipSnaps: true,
        startIndex: 1,
      }}
      {...props}
    >
      <WorksCarouselContent wrapperClassName='mb-10'>
        {children}
      </WorksCarouselContent>
      <CarouselDots />
    </Carousel>
  );
};
