import { DarkTheme } from '@react-navigation/native';
const Dark = {
    dark: true,
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#171822',
        white: '#ffffff',
        black: '#000000',
        primary: '#22818B',
        secondary: '#03DAC5',
        grey: '#9d9fa3',
        lightGray: '#D3D3D3',
        success: '#38C2B7',
        error: '#E14161',
        text1: '#FFFFFF',
        text2: '#7B7F9E',
        text3: '#7B7F9E',
        boxBackground: '#212330',
        primaryBackground: '#22818B',
        slideTwoBackground: '#EFFEF1',
        secondaryBackground: '#BFEAF5',
        thirdBackground: '#8D492F',
        fourthBackground: '#FFE4D9',
        iconBackground: '#FFFFFF',
        pristineInput: '#8A8D90',
        grey2: '#0C0D34',
    },
};

export default Dark;
