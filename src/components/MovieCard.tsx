
import React from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  year: string;
  rating?: string;
  director?: string;
}

const MovieCard = ({ id, title, posterPath, year, rating, director }: MovieCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="movie-card min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px]">
      <img 
        src={posterPath} 
        alt={title} 
        className="w-full h-full object-cover rounded-md"
      />
      
      <div className="movie-card-overlay">
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-1 sm:space-x-2">
            <button className="bg-white rounded-full p-0.5 sm:p-1 hover:bg-white/90 transition">
              <Play size={isMobile ? 12 : 16} className="fill-black" />
            </button>
            <button className="bg-gray-800/80 rounded-full p-0.5 sm:p-1 hover:bg-gray-700/80 transition border border-gray-500">
              <Plus size={isMobile ? 12 : 16} className="text-white" />
            </button>
          </div>
          <button className="bg-gray-800/80 rounded-full p-0.5 sm:p-1 hover:bg-gray-700/80 transition border border-gray-500">
            <ThumbsUp size={isMobile ? 12 : 16} className="text-white" />
          </button>
        </div>
        
        <h3 className="font-semibold text-xs sm:text-sm line-clamp-1">{title}</h3>
        
        <div className="flex text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 space-x-1">
          {rating && <span className="text-green-500">{rating}% Match</span>}
          {rating && year && <span>•</span>}
          <span>{year}</span>
        </div>
        
        {director && <span className="text-[10px] sm:text-xs text-gray-400 line-clamp-1">Dir. {director}</span>}
      </div>
    </div>
  );
};

export default MovieCard;
