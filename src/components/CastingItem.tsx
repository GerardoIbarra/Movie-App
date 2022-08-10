import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';

interface Props{
    actor:Cast
}

export const CastingItem = ({actor}:Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
        <View style={styles.container}>
           
          {
            actor.profile_path && (
                <Image 
                    source={{
                    uri:uri
                    }}
                    style={styles.image}  
                />
            )
          }

           <View style={{margin:10}}>
                <Text style={{fontSize:18, fontWeight:'bold',color:'black'}}>
                    {actor.name}
                </Text>
                <Text style={{fontSize:15, opacity:0.7,color:'black'}}>
                    {actor.character}
                </Text>

           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
         marginBottom:90, 
         backgroundColor:'#fff',
         borderRadius:20,
        //  height: 50,
        marginRight:10,
         flexDirection:'row',
         shadowColor:"#000",
         shadowOffset:{
             width:0,
             height: 10,
        },
        shadowOpacity:0.24,
        shadowRadius:3.84,
        elevation:10,
    },
    image:{
        width:60,
        height:60,
        borderRadius:10,
        margin: 10
    },
});
