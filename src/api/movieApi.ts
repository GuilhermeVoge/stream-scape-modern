
export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  year: string;
  rating?: string;
  director?: string;
}

export interface MovieResponse {
  data: Movie[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export async function fetchMovies(page: number = 1, limit: number = 20): Promise<MovieResponse> {
  try {
    const response = await fetch(`https://movies.slideworks.cc/movies?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
}
