import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/MovieInterfaces';

interface Prop{
    movie: Movie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie,height = 420,width = 300} : Prop) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation();
  return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('DetailScreen',movie)}
            activeOpacity={0.8}
            style={{width,height, marginHorizontal:2,paddingBottom:20,paddingHorizontal:7}}>
            <View style={style.imageContainer}>
                <Image 
                source={{
                    uri:uri
                    }}
                    style={style.image}
                />
            </View>
            {/* <Text>{movie.title}</Text> */}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    image:{
       flex: 1,
       borderRadius:20,
       
    },
    imageContainer:{
        flex:1,
        borderRadius:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height: 10,
       },
       shadowOpacity:0.24,
       shadowRadius:3.84,
       elevation:10,
    }
})