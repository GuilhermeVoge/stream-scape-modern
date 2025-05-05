
import React from 'react';
import MovieCard from './MovieCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Movie } from '@/api/movieApi';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow = ({ title, movies }: MovieRowProps) => {
  const rowRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 1.5
        : scrollLeft + clientWidth / 1.5;
        
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 px-6">{title}</h2>
      
      <div className="relative group">
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-r-md p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        
        <div ref={rowRef} className="flex overflow-x-scroll scrollbar-hide py-4 px-6 space-x-4">
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
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-l-md p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => handleScroll('right')}
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
