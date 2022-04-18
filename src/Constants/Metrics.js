import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const Metrics = {
    // global sizes
    base: 8,
    font: 14,
    radius: 20,
    padding: 24,
    large: 40,
    big: 32,
    small: 24,

    s5: 5,
    s8: 8,
    s10: 10,
    s16: 16,
    s20: 20,
    s30: 30,
    s40: 40,
    s50: 50,
    s60: 60,

    // font sizes
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 16,
    h5: 14,
    h6: 13,
    title1: 28,
    title2: 24,
    title3: 16,
    hero: 80,
    body: 16,
    header: 12,
    button: 15,

    borderWidth: 0.4,

    horizontalLineHeight: 1,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    drawerWidth: (4 / 5) * width,
    navBarHeight: Platform.OS === 'ios' ? 64 : 54,

    buttonRadius: 4,

    icons: {
        tiny: 15,
        small: 20,
        medium: 30,
        large: 45,
        xl: 50,
    },

    images: {
        small: 20,
        medium: 40,
        large: 60,
        logo: 200,
    },

    spacing: {
        small: 8,
        medium: 16,
        large: 24,
        xlarge: 40,
    },
    rad: {
        small: 4,
        medium: 10,
        large: 25,
        xlarge: 75,
      }
};

export default Metrics;
