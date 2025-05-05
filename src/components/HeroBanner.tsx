
import React, { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { topRated } from '@/data/movies';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroBanner = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [api, setApi] = useState<any>(null);
  const currentMovie = topRated[currentMovieIndex];
  const isMobile = useIsMobile();

  // Set up the carousel API and event listeners
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      setCurrentMovieIndex(currentIndex % topRated.length);
    };

    api.on("select", onSelect);
    
    // Initial selection
    onSelect();

    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
      {/* Dynamic background image based on current movie */}
      <div className="absolute inset-0 transition-all duration-500">
        <img 
          src={currentMovie.posterPath} 
          alt={currentMovie.title} 
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-streaming-dark via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-4xl">
        <div className="animate-slide-up">
          <h2 className="text-sm md:text-base text-streaming-text/80 mb-1">Filmes em Destaque</h2>
          
          <div className="mb-6">
            <Carousel 
              className="w-full max-w-3xl"
              setApi={setApi}
            >
              <CarouselContent>
                {topRated.map((movie, index) => (
                  <CarouselItem key={movie.id} className="basis-full">
                    <div className="p-1">
                      <div className="rounded-lg overflow-hidden flex flex-col items-center">
                        <img 
                          src={movie.posterPath} 
                          alt={movie.title} 
                          className="h-36 sm:h-48 md:h-64 object-cover"
                        />
                        <div className="p-2 text-center">
                          <h3 className="font-semibold text-white text-sm sm:text-md md:text-lg">{movie.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-300">{movie.year} | {movie.rating}% | Dir. {movie.director}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 bg-black/40 border-none hover:bg-black/60 hidden sm:flex" />
              <CarouselNext className="absolute right-0 bg-black/40 border-none hover:bg-black/60 hidden sm:flex" />
            </Carousel>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-[#CBC3E3] px-1.5 py-0.5 text-xs font-semibold rounded">TOP 10</span>
            <span className="text-xs sm:text-sm text-gray-300">Filmes Melhor Avaliados</span>
          </div>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 max-w-2xl line-clamp-3 md:line-clamp-none">
            Confira nossa seleção dos filmes mais bem avaliados de todos os tempos. Uma coleção de obras-primas que definiram o cinema como o conhecemos hoje.
          </p>
          
          <div className="flex space-x-2 md:space-x-4 mb-6">
            <Button className="bg-white hover:bg-white/90 text-black rounded-md flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-5 text-xs sm:text-base">
              <Play size={isMobile ? 16 : 20} className="fill-black" />
              <span className="font-semibold">Assistir</span>
            </Button>
            <Button variant="outline" className="bg-gray-500/30 hover:bg-gray-500/40 text-white border-none rounded-md flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-5 text-xs sm:text-base">
              <Info size={isMobile ? 16 : 20} />
              <span className="font-semibold">Mais</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
