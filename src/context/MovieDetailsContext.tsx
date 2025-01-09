import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../interface/Movie';

interface MovieContextProps {
  movie: Movie | null;
  setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = (): MovieContextProps => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider');
  }
  return context;
};
