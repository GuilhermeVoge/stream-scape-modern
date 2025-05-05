
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import Footer from '@/components/Footer';
import { fetchMovies } from '@/api/movieApi';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { trendingNow, topRated, classics } from '@/data/movies';

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
  
  return (
    <div className="relative min-h-screen bg-streaming-dark text-white">
      <Navbar />
      
      <main className="pb-10">
        <HeroBanner />
        
        <div className="mt-8">
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
              {data && <MovieRow title="API Slideworks" movies={data.data} />}
              <MovieRow title="Em Alta" movies={trendingNow} />
              <MovieRow title="Melhor Avaliados" movies={topRated} />
              <MovieRow title="Clássicos" movies={classics} />
              
              {data && data.pagination && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => handlePageChange(currentPage - 1)} 
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                      
                      {[...Array(Math.min(5, data.pagination.pages))].map((_, index) => {
                        const pageNumber = currentPage > 3 ? 
                          (currentPage - 2) + index : 
                          index + 1;
                          
                        if (pageNumber > data.pagination.pages) return null;
                        
                        return (
                          <PaginationItem key={pageNumber}>
                            <PaginationLink 
                              isActive={pageNumber === currentPage}
                              onClick={() => handlePageChange(pageNumber)}
                              className="cursor-pointer"
                            >
                              {pageNumber}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      {currentPage < data.pagination.pages && (
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
