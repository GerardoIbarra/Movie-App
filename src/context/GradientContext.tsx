import React, { Children, useState } from 'react'
import { createContext } from "react";

interface ColorsPicture{
    primary:string;
    secondary:string;
}

interface ContestProps{
    colors:ColorsPicture;
    PrevColors:ColorsPicture;
    setMainColors:(colors:ColorsPicture)=> void;
    setPrevMainColors:(colors:ColorsPicture)=> void;
}

export const GradientContext = createContext({} as ContestProps);

export const GradientProvider = ({children} : any) => {

    const [colors,setcolors] = useState<ColorsPicture>({
        primary:'red',
        secondary:'blue'
    });

    const [PrevColors,setPrevColors] = useState<ColorsPicture>({
        primary:'transparent',
        secondary:'transparent'
    });

    const setMainColors = (colors : ColorsPicture) =>{
        setcolors(colors);
    }   
     const setPrevMainColors = (colors : ColorsPicture) =>{
        setPrevColors(colors);
    } 

    return(
        <GradientContext.Provider value={{
            colors,
            PrevColors,
            setMainColors,
            setPrevMainColors
        }}>

        {children}
        </GradientContext.Provider>
    )

}