
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, ChevronDown, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-4 lg:px-10 py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link to="/" className="text-streaming-accent font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
            Slideworks Top Filmes
          </Link>
          
          {/* Mobile menu button */}
          {isMobile && (
            <button className="text-white p-1" onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">Início</Link>
            <Link to="/tv" className="text-white hover:text-gray-300">Séries</Link>
            <Link to="/movies" className="text-white hover:text-gray-300">Filmes</Link>
            <Link to="/new" className="text-white hover:text-gray-300">Novidades</Link>
            <Link to="/mylist" className="text-white hover:text-gray-300">Minha Lista</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="text-white hover:text-gray-300">
            <Search size={isMobile ? 18 : 20} />
          </button>
          <button className="text-white hover:text-gray-300 relative">
            <Bell size={isMobile ? 18 : 20} />
            <span className="absolute -top-1 -right-1 bg-streaming-accent text-white text-xs rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
              {!isMobile && "3"}
            </span>
          </button>
          <div className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group">
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded bg-streaming-accent flex items-center justify-center">
              <User size={isMobile ? 14 : 16} />
            </div>
            <ChevronDown size={isMobile ? 14 : 16} className="text-white group-hover:rotate-180 transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {isMobile && menuOpen && (
        <nav className="flex flex-col space-y-4 mt-4 p-4 bg-black/90 rounded-lg animate-fade-in">
          <Link to="/" className="text-white hover:text-gray-300">Início</Link>
          <Link to="/tv" className="text-white hover:text-gray-300">Séries</Link>
          <Link to="/movies" className="text-white hover:text-gray-300">Filmes</Link>
          <Link to="/new" className="text-white hover:text-gray-300">Novidades</Link>
          <Link to="/mylist" className="text-white hover:text-gray-300">Minha Lista</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
