import { useEffect, useState } from 'react';
import MovieDB from '../api/MovieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/MovieInterfaces';

interface MovieState{
  nowPlaying:Movie[];
  Popular:Movie[];
  topRated:Movie[];
  upcoming:Movie[];
}

export const useMovies = () => {
    const [loading,setloading] = useState(true);
    const [moviesState,setMoviesState]= useState<MovieState>(
      {
        nowPlaying:[],
        Popular:[],
        topRated:[],
        upcoming:[]
      }
    )

    const getMovies = async () =>{
        const nowPlayingPromise =  MovieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise =  MovieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = MovieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upComingPromise =  MovieDB.get<MovieDBMoviesResponse>('/upcoming');

        const respuestas = await Promise.all([nowPlayingPromise,popularPromise,topRatedPromise,upComingPromise])

        setMoviesState({
          nowPlaying:respuestas[0].data.results,
          Popular:respuestas[1].data.results,
          topRated:respuestas[2].data.results,
          upcoming:respuestas[3].data.results
        });

        setloading(false);
    }

    useEffect(() => {
       getMovies();
    },[])

  return {
    ...moviesState,
    loading
  }
}
