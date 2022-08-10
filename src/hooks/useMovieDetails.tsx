import { useState, useEffect } from 'react';
import MovieDB from '../api/MovieDB';
import { CreditsMovie, Cast } from '../interfaces/CreditsInterface';
import { MovieCompleted } from '../interfaces/MovieInterfaces';
interface MovieDetails{
    isloading: Boolean;
    MovieFull?: MovieCompleted;
    cast:Cast[];
}

export const useMovieDetails = (movieId : number) => {
    const [state,setstate] = useState<MovieDetails>({
        isloading:true,
        MovieFull:undefined,
        cast:[]
    });

    const getNowMovieDetails = async() =>{
        const MovieDetailsPromise =  MovieDB.get<MovieCompleted>(`/${movieId}`);
        const CastMoviePromise =  MovieDB.get<CreditsMovie>(`/${movieId}/credits`);

        const [movieDetailsPromise, castMoviePromise] = await Promise.all([MovieDetailsPromise,CastMoviePromise]);
        setstate({
            isloading:false,
            MovieFull:movieDetailsPromise.data,
            cast:castMoviePromise.data.cast,
        });
    }

    useEffect(()=>{
        getNowMovieDetails();
    },[]);

    return {
        ...state
    };
}