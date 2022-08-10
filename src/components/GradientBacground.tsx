import React, { useContext,useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const GradientBacground = ({children}:Props) => {
    
    const {colors,PrevColors,setPrevMainColors} = useContext(GradientContext);
    const {opacity,fadeIn,fadeOut}= useFade()

    useEffect( () => {
        fadeIn(()=>{
            setPrevMainColors(colors);
            fadeOut();
        })
    },[colors]);

  return (
    <View style={{flex:1}}>
        <LinearGradient 
            colors={['PrevColors.primary','PrevColors.secondary','#fff']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1,y:0.1}}
            end={{x:0.5,y:0.5}}
        />
        <Animated.View
        style={{...StyleSheet.absoluteFillObject,opacity}}
        >
        <LinearGradient 
            colors={['colors.primary','colors.secondary','#fff']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1,y:0.1}}
            end={{x:0.5,y:0.5}}
        />
        </Animated.View>
        {children}
    </View>    
    )
}
