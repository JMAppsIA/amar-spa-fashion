import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { McText } from 'Components';
import { Metrics } from 'Constants';
import { SocialLogin } from 'Authentication/components';
import { useTheme } from 'styled-components';

const Footer = ({ title, action, onPress }) => {
    const theme = useTheme();
    return (
        <>
            <SocialLogin />
            <View 
              style={{
                alignItems: 'center',
                marginTop: Metrics.spacing.medium,
              }}
            >
                <BorderlessButton {...{ onPress }}>
                    <McText button color={theme.colors.black}>
                        <McText regular color={theme.colors.boxBackground}>{`${title} `}</McText>
                        <McText regular color={theme.colors.primaryBackground}>{action}</McText>
                    </McText>
                </BorderlessButton>
            </View>
        </>
    )
}

export default Footer;