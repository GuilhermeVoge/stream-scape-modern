
import React from 'react';
import MovieCard from './MovieCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  posterPath: string;
  year: string;
  rating?: string;
  director?: string;
}

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
        
        <div ref={rowRef} className="carousel-container">
          <div className="carousel-row">
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.posterPath}
                year={movie.year}
                rating={movie.rating}
                director={movie.director}
              />
            ))}
          </div>
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
