
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import Footer from '@/components/Footer';
import { trendingNow, topRated, newReleases, classics } from '@/data/movies';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-streaming-dark text-white">
      <Navbar />
      
      <main className="pb-10">
        <HeroBanner />
        
        <div className="mt-8">
          <MovieRow title="Trending Now" movies={trendingNow} />
          <MovieRow title="Top Rated" movies={topRated} />
          <MovieRow title="New Releases" movies={newReleases} />
          <MovieRow title="Classics" movies={classics} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
