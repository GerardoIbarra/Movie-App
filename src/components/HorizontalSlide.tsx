import React from 'react'
import { Movie } from '../interfaces/MovieInterfaces';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from './MoviePoster';

interface props{
    title?:string;
    movies:Movie[];
}


export const HorizontalSlide = ({title,movies}: props) => {
  return (
    <View style={{height:(title)?260:230 }}>
        {
            title && <Text style={{fontSize:30,fontWeight:'bold', marginLeft:10, color:'black'}}>{title}</Text>

        }
        <FlatList 
            data={movies}
            renderItem={ ({item} : any ) => (
                <MoviePoster movie={item} width={120} height={200} />
                )}
            keyExtractor={(item)=> item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>


    )
}
