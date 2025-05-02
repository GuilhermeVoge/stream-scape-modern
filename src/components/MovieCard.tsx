
import React from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  year: string;
  rating?: string;
  director?: string;
}

const MovieCard = ({ id, title, posterPath, year, rating, director }: MovieCardProps) => {
  return (
    <div className="movie-card min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
      <img 
        src={posterPath} 
        alt={title} 
        className="w-full h-full object-cover rounded-md"
      />
      
      <div className="movie-card-overlay">
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-2">
            <button className="bg-white rounded-full p-1 hover:bg-white/90 transition">
              <Play size={16} className="fill-black" />
            </button>
            <button className="bg-gray-800/80 rounded-full p-1 hover:bg-gray-700/80 transition border border-gray-500">
              <Plus size={16} className="text-white" />
            </button>
          </div>
          <button className="bg-gray-800/80 rounded-full p-1 hover:bg-gray-700/80 transition border border-gray-500">
            <ThumbsUp size={16} className="text-white" />
          </button>
        </div>
        
        <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
        
        <div className="flex text-xs text-gray-400 mt-1 space-x-1">
          {rating && <span className="text-green-500">{rating}% Match</span>}
          {rating && year && <span>•</span>}
          <span>{year}</span>
        </div>
        
        {director && <span className="text-xs text-gray-400">Dir. {director}</span>}
      </div>
    </div>
  );
};

export default MovieCard;
