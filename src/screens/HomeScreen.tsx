import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-anchor-carousel';
import {HorizontalSlide} from '../components/HorizontalSlide';
import {GradientBacground} from '../components/GradientBacground';
import ImageColors from 'react-native-image-colors';
import { getImageColores } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const {width: windowswidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const {loading, nowPlaying, Popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  //  const {setMainColors} = useContext(GradientContext);      

  // const getPosterColors = async (index: number) => {
  //     const movie = nowPlaying[index];
  //     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  //   const [primary = 'green',secondary = 'orange'] = await getImageColores(uri);
   
  //   setMainColors({primary, secondary});
  //   };

    // useEffect(()=>{
    //     if(nowPlaying.length > 0){
    //         getPosterColors(0)
    //     }
    // },[nowPlaying])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    // <GradientBacground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* <MoviePoster movie={peliculasEnCine[0]} /> */}

          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowswidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              // onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlide title="Popular" movies={Popular} />
          <HorizontalSlide title="Top Rated" movies={topRated} />
          <HorizontalSlide title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    // </GradientBacground>
  );
};
