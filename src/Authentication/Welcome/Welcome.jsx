import React from 'react';
import { View, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { McText, McImage, McButton } from 'Components';
import { Images, Metrics } from 'Constants';

const { width } = Dimensions.get('window');
const picture = {
    src: Images.man,
    width: 408,
    height: 612
}

export const assets = [picture.src];

const Welcome = ({ navigation }) => {
    const theme = useTheme();
    
    return (
        <View 
          style={{
            flex: 1,
            backgroundColor: theme.colors.boxBackground
          }}
        >
            <View 
                style={{
                  flex: 1,
                  borderBottomRightRadius: Metrics.rad.xlarge,
                  backgroundColor: theme.colors.grey2,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <McImage 
                    source={picture.src}
                    style={{ 
                        width: width - Metrics.rad.xlarge, 
                        height: ((width - Metrics.rad.xlarge) * picture.height) / picture.width
                    }}
                />
            </View>
            <View 
              style={{
                flex: 1,
                borderTopLeftRadius: Metrics.rad.xlarge,
              }}
            >
                <View 
                  style={{
                    backgroundColor: theme.colors.grey2,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                />
                <View 
                  style={{
                    flex: 1,
                    backgroundColor: theme.colors.boxBackground,
                    borderTopLeftRadius: Metrics.rad.xlarge,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: Metrics.rad.xlarge,
                  }}
                >
                    <McText title2>Let's get started</McText>
                    <McText body style={{textAlign: 'center'}}>
                        Login to your account below or signup for an amazing experience
                    </McText>
                    <McButton 
                        primary
                        onPress={() => navigation.navigate("Login")}
                    >
                      <McText regular color={theme.colors.white} align='center'>Have an account? Login</McText>
                    </McButton>
                    <McButton 
                        secondary
                        onPress={() => navigation.navigate("Signup")}
                    >
                      <McText regular color={theme.colors.white} align='center'>Join us, it's Free</McText>
                    </McButton>
                    <BorderlessButton 
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <McText button color={theme.colors.black} align='center'>Forgot password?</McText>
                    </BorderlessButton>
                </View>
            </View>
        </View>
    );
}

export default Welcome;