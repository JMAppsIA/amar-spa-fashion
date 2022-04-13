import { View } from 'react-native'
import React from 'react'
import { SocialLogin } from "Authentication/components";
import { McText, McButton } from 'Components';
import { useTheme } from 'styled-components';

const Footer = ({onPress, title, action}) => {
  const theme = useTheme();
  return (
    <>
      <SocialLogin />
      <View style={{ alignItems: "center" }}>
        <McButton transparent {...{onPress}}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <McText regular color={theme.colors.white}>
              {title}
            </McText>
            <McText bold color={theme.colors.primaryBackground}>
              {` ${action}`}
            </McText>
          </View>
        </McButton>
      </View>
    </>
  );
}

export default Footer