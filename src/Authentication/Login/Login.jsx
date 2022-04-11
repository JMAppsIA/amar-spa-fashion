import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components';
import { McText, McButton } from 'Components';
import { Container } from 'Components/shared';
import { SocialLogin } from '../components';

const Login = () => {
  const theme = useTheme();
  const footer = (
    <>
      <SocialLogin />
      <View style={{alignItems: 'center'}}>
        <McButton transparent onPress={() => alert('Registro!')}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <McText regular color={theme.colors.white}>No tienes una cuenta?</McText>
            <McText bold color={theme.colors.primaryBackground}>{` `}Registrate aqui!</McText>
          </View>
        </McButton>
      </View>
    </>
  )
  return (
    <Container {...{footer}}>
      <View/>
    </Container>
  )
}

export default Login