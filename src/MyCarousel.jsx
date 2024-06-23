import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MyCarousel(props) {
  return (
    <Carousel {...props} >
      <CarouselContent className=' h-[250px]'>
        <CarouselItem>
          <img src="https://picsum.photos/id/120/800" alt="slide" className="w-full h-full object-cover"/>
        </CarouselItem>
        <CarouselItem>
          <img src="https://picsum.photos/id/121/800" alt="slide" className="w-full h-full object-cover"/>
        </CarouselItem>
        <CarouselItem>
          <img src="https://picsum.photos/id/122/800" alt="slide" className="w-full h-full object-cover"/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MyCarousel;
