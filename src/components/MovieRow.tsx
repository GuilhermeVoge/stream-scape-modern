
import React from 'react';
import MovieCard from './MovieCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Movie } from '@/api/movieApi';
import { useIsMobile } from '@/hooks/use-mobile';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  const rowRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      // For mobile, scroll less to ensure better visibility
      const scrollFactor = isMobile ? 0.9 : 1.5;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / scrollFactor
        : scrollLeft + clientWidth / scrollFactor;
        
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg md:text-xl font-semibold mb-2 px-2 md:px-6">{title}</h2>
      
      <div className="relative group">
        {!isMobile && (
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-r-md p-1 md:p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft size={isMobile ? 20 : 24} className="text-white" />
          </button>
        )}
        
        <div 
          ref={rowRef} 
          className="flex overflow-x-scroll scrollbar-hide py-4 px-2 md:px-6 space-x-2 md:space-x-4"
        >
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath || 'https://via.placeholder.com/300x450?text=No+Poster'}
              year={movie.year || 'N/A'}
              rating={movie.rating}
              director={movie.director}
            />
          ))}
        </div>
        
        {!isMobile && (
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-l-md p-1 md:p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => handleScroll('right')}
          >
            <ChevronRight size={isMobile ? 20 : 24} className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
