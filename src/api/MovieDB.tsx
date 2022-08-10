import axios from "axios";

const MovieDB = axios.create(
    {
       baseURL:'https://api.themoviedb.org/3/movie' ,
       params:{
            api_key:'6705ef9fd0453f5401709f0781d58c5a',
            language:'es-ES'
       }
    }
);

export default MovieDB;