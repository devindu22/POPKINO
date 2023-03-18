import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  width,
  height,

  colors: {
    // base colors
    primary: '#242A32', // blue
    secondary: '#25282B', // black
    white: '#FFFFFF',
    black: '#111719',

    grey1: '#D3D1D8',
    grey2: '#30384F',
    grey3: '#9796A1',
    red: '#E50914',
    green: '#7DD329',
  },

  fontFamily: {
    bold: 'Rubik-Bold',
    medium: 'Rubik-Medium',
    light: 'Rubik-Light',
  },
};
