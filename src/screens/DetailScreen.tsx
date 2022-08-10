import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/MovieInterfaces';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'>{};
const {height: screenHeight} = Dimensions.get('screen');

export const DetailScreen = ( { route,navigation } : props ) => {

  const movie = route.params as Movie;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {cast,isloading,MovieFull} = useMovieDetails(movie.id);

  return (
   <ScrollView>

     <View style={style.imageContainer}>

        <View style = {style.imageborder}>
        <Image 
          source={{
              uri:uri
              }}
          style={style.image}
        />
        </View>
    </View>

    <View style={style.margincontainer}>

      <Text style={style.title}>{movie.original_title}</Text>
      <Text style={style.subtitle}>{movie.title}</Text>

    </View>

      {
        isloading ? 
        <ActivityIndicator size={35} color="grey" style={{marginTop:20}} />
        : <MovieDetails cast={cast} movieFull={MovieFull!}/>
      }
      {/* <TouchableOpacity style={style.backbottons} onPress={()=> navigation.pop()} >
       <View style={{backgroundColor:'blue',height:100,width:100}}></View>
      </TouchableOpacity> */}

   </ScrollView>
    )}

const style = StyleSheet.create({
  image:{
     flex: 1,     
  },
  imageContainer:{
     width:'100%',
    height: screenHeight * 0.7 ,
    shadowColor:"#000",
    shadowOffset:{
        width:0,
        height: 10,
   },
   shadowOpacity:0.24,
   shadowRadius:3.84,
   elevation:10,
  //  borderTopEndRadius:30,
  //  borderTopStartRadius:30,
  },
  imageborder:{
    flex:1 ,
    overflow:'hidden' ,
    borderTopEndRadius:25,
    borderTopStartRadius:25,
  },
  margincontainer:{
    marginHorizontal:20,
    marginTop:20,
    // marginEnd:20,
  },
  subtitle:{
    fontSize:18,
    color: 'black',

  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color: 'black',
  },
  backbottons:{
    position: 'absolute',
    top:20,
    left:5,
  }
})