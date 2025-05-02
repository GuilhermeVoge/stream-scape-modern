
import React, { useState } from 'react';
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
import { useEffect } from 'react';

const HeroBanner = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const currentMovie = topRated[currentMovieIndex];

  // Handle carousel slide change
  const handleSlideChange = (index: number) => {
    setCurrentMovieIndex(index);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
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
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-4xl">
        <div className="animate-slide-up">
          <h2 className="text-sm md:text-base text-streaming-text/80 mb-1">Filmes em Destaque</h2>
          
          <div className="mb-6">
            <Carousel 
              className="w-full max-w-3xl"
              onSlideChange={(api) => {
                const currentIndex = api?.selectedScrollSnap() || 0;
                handleSlideChange(currentIndex % topRated.length);
              }}
            >
              <CarouselContent>
                {topRated.map((movie, index) => (
                  <CarouselItem key={movie.id} className="basis-full">
                    <div className="p-1">
                      <div className="rounded-lg overflow-hidden flex flex-col items-center">
                        <img 
                          src={movie.posterPath} 
                          alt={movie.title} 
                          className="h-64 object-cover"
                        />
                        <div className="p-2 text-center">
                          <h3 className="font-semibold text-white text-lg">{movie.title}</h3>
                          <p className="text-sm text-gray-300">{movie.year} | {movie.rating}% | Dir. {movie.director}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 bg-black/40 border-none hover:bg-black/60" />
              <CarouselNext className="absolute right-0 bg-black/40 border-none hover:bg-black/60" />
            </Carousel>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-streaming-accent px-1.5 py-0.5 text-xs font-semibold rounded">TOP 10</span>
            <span className="text-sm text-gray-300">Filmes Melhor Avaliados | Aclamados pela Crítica</span>
          </div>
          
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl">
            Confira nossa seleção dos filmes mais bem avaliados de todos os tempos. Uma coleção de obras-primas que definiram o cinema como o conhecemos hoje.
          </p>
          
          <div className="flex space-x-4 mb-6">
            <Button className="bg-white hover:bg-white/90 text-black rounded-md flex items-center space-x-2 px-6 py-5">
              <Play size={20} className="fill-black" />
              <span className="font-semibold">Assistir</span>
            </Button>
            <Button variant="outline" className="bg-gray-500/30 hover:bg-gray-500/40 text-white border-none rounded-md flex items-center space-x-2 px-6 py-5">
              <Info size={20} />
              <span className="font-semibold">Mais Informações</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
