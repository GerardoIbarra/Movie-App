import ImageColors from "react-native-image-colors";

export const getImageColores = async (uri: string) => {
  //   console.log(uri);
  const colors = await ImageColors.getColors(uri,{})

    var primary;
    var secondary;

    if(colors.platform === 'android'){
        primary = colors.dominant;
        secondary = colors.average;

    }else{
        primary = colors.primary;
        secondary = colors.secondary;
    }


  return[primary,secondary];
};