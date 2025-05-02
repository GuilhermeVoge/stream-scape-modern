
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-4 lg:px-10 py-4 flex items-center justify-between',
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-streaming-accent font-bold text-2xl">StreamScape</Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/tv" className="text-white hover:text-gray-300">TV Shows</Link>
          <Link to="/movies" className="text-white hover:text-gray-300">Movies</Link>
          <Link to="/new" className="text-white hover:text-gray-300">New & Popular</Link>
          <Link to="/mylist" className="text-white hover:text-gray-300">My List</Link>
        </nav>
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-gray-300">
          <Search size={20} />
        </button>
        <button className="text-white hover:text-gray-300 relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-streaming-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="h-8 w-8 rounded bg-streaming-accent flex items-center justify-center">
            <User size={16} />
          </div>
          <ChevronDown size={16} className="text-white group-hover:rotate-180 transition-transform duration-300" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
