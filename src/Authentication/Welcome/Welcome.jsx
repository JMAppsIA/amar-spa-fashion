import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'
import { Slides } from 'Mock';
import { McText, McImage, McButton } from 'Components';

const { width, height } = Dimensions.get('window');

const Welcome = ({navigation}) => {
  const theme = useTheme();
  return (
    <View style={{
        flex: 1,
        backgroundColor: theme.colors.boxBackground,
      }}
    >
      <View style={{
        flex: 1,
        borderBottomRightRadius: 75,
        backgroundColor: theme.colors.text2,
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}>
        <McImage source={Slides[0].image.src} 
          style={{
            width: width - 75,
            height: ( (width - 75) * Slides[0].image.height ) / Slides[0].image.width,
          }}
        />
      </View>
      <View style={{
        flex: 1,
        borderBottomRightRadius: 75,
      }}>
        <View style={{
          backgroundColor: theme.colors.text2,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
          <View style={{
            flex: 1,
            borderTopLeftRadius: 75,
            backgroundColor: theme.colors.boxBackground,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 75,
          }}>
            <McText semi size={20}>Empecemos</McText>
            <McText regular size={15} color={theme.colors.text3} align='center'>Ingresa o registrate para empezar tu cambio! 🎉 </McText>
            <McButton primary onPress={() => {
              navigation.navigate('Login')
            }}>
              <McText regular align='center'>Ingresa</McText>
            </McButton>
            <McButton secondary>
              <McText regular color={theme.colors.white} align='center'>Únete, es gratis! 🎉 </McText>
            </McButton>
            <McButton transparent>
              <McText regular align='center'>Olvidaste tu contraseña?</McText>
            </McButton>
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default Welcome