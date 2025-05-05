
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import Footer from '@/components/Footer';
import { fetchMovies } from '@/api/movieApi';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { trendingNow, topRated, classics, newReleases } from '@/data/movies';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', currentPage, limit],
    queryFn: () => fetchMovies(currentPage, limit),
  });
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Calculate pagination array safely
  const getPaginationItems = () => {
    if (!data?.pagination?.pages) return [];
    
    const totalPages = data.pagination.pages;
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than max, show all of them
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Otherwise, calculate which pages to show
      let startPage = Math.max(1, currentPage - 2);
      let endPage = startPage + maxPagesToShow - 1;
      
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
      
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }
  };
  
  return (
    <div className="relative min-h-screen bg-streaming-dark text-white">
      <Navbar />
      
      <main className="pb-10">
        <HeroBanner />
        
        <div className="mt-8 px-4 md:px-6 lg:px-10">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="text-streaming-accent">Carregando filmes...</div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-40">
              <div className="text-red-500">Erro ao carregar filmes. Tente novamente.</div>
            </div>
          ) : (
            <>
              <MovieRow title="Em Alta" movies={trendingNow} />
              <MovieRow title="Melhor Avaliados" movies={topRated} />
              <MovieRow title="Clássicos" movies={classics} />
              <MovieRow title="Novos Lançamentos" movies={newReleases} />
              
              {data?.pagination && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent className="flex-wrap justify-center gap-y-2">
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => handlePageChange(currentPage - 1)} 
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                      
                      {getPaginationItems().map((pageNumber) => (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink 
                            isActive={pageNumber === currentPage}
                            onClick={() => handlePageChange(pageNumber)}
                            className="cursor-pointer"
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {data && currentPage < data.pagination.pages && (
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
