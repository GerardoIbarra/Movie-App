import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

// const AppState = ({children}:any) =>{
//   return(
//     <GradientProvider>
//         {children}
//     </GradientProvider>
//   )
// }

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppState> */}
        <Navigation/>
     </NavigationContainer>
    )
}
 export default App;