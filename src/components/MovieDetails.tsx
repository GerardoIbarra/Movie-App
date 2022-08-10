import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { MovieCompleted } from '../interfaces/MovieInterfaces';
import { Cast } from '../interfaces/CreditsInterface';
import currencyFormater from 'currency-formatter';
import { CastingItem } from './CastingItem';

interface Props{
    movieFull: MovieCompleted;
    cast:Cast[];
}

export const MovieDetails = ({cast,movieFull}:Props) => {
  return (
    <>
         <View style={{marginTop:20}}>
           <View style={{flexDirection:"row", marginLeft:10}}>
           
              <View style={{backgroundColor:'blue',height:20,width:20}}></View>
                <Text style={{marginLeft:5,color:'black'}}>{movieFull.vote_average}</Text>
                <Text style={{color:'black'}}>
                    -  {movieFull.genres.map(g => g.name).join(' , ')}
                </Text>
           </View>
            <View style={{margin:10}}>

                <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold', color:'black'}}>
                    Historia
                </Text>
                <Text style={{fontSize:16,color:'black'}}>
                    {movieFull.overview}
                </Text>

                <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold',color:'black'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize:14,color:'black'}}>
                    {currencyFormater.format(movieFull.budget,{code:'USD'})}
                </Text>

                <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold',color:'black'}}>
                    Actores
                </Text>
                <FlatList 
                    data={cast}
                    keyExtractor ={(item)=> item.id.toString()}
                    renderItem={({item}) => <CastingItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                
                {/* <CastingItem actor={cast[0]}/> */}
            </View>
        </View>
    </>
    )
}
