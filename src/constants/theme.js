import {Dimensions, Platform, StyleSheet, StatusBar} from 'react-native';

export const {width, height} = Dimensions.get('window');

/* * Colors * */
export const COLORS = {
  // base colors
  primary: '#4A1E21',
  secondary: '#AE5A60',

  // gradients
  gradient: ['#20242b', '#3a3d46'],
  tabGradient: ['#3a3d46', '#20242b'],

  //  RGBA
  PRGBA: 'rgba(107 ,198 ,47,0.2)',
  BlackRGBA: 'rgba(0 ,0 ,0,0.5)',
  redRGBA: 'rgba(153, 14, 0, 0.2)',

  // colors
  whitishGrey: 'rgb(239,239,239)',
  black: '#000000',
  white: '#FFFFFF',
  grey: '#ACB3BE',
  veryLightPink: '#efefef',
  transparent: 'transparent',
  darkGray: '#666666',
};

const appTheme = {COLORS};

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {};

/* * Images * */
export const IMAGES = {
  StarFilled: require('../assets/StarFilled.png'),
  StarUnfilled: require('../assets/StarUnfilled.png'),
};

/* * Screens * */
export const SCREENS = {};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyFive: height * 0.03,
  fifty: height * 0.075,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.white,
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.white,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.white,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.white,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.white,
  },
  mediumFont10: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10},
  mediumFont12: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12},
  mediumFont14: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14},
  mediumFont16: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16},
  mediumFont18: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18},
  lightFont08: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08},
  lightFont10: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10},
  lightFont12: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12},
  lightFont14: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14},
  lightFont16: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16},
  lightFont18: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18},
};

export const STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    paddingTop:
      Platform.OS === 'android'
        ? SIZES.twenty
        : StatusBar.currentHeight + SIZES.five,
  },

  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
});

export const APPSTATE = {};

/* * Api Path * */
export const CONSTANTS = {
  BaseUrl: 'http://208.117.82.86/api/v1/',
  BaseUrlImage: 'http://208.117.82.86/',
  ImageBaseUrl: 'http://208.117.82.86/',
};

/* * FirebaseConstants * */
export const FIREBASECONSTANTS = {};
