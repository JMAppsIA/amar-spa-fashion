import React, { ReactNode } from "react";
import { Dimensions, StyleSheet, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from "expo-constants";
import { Images, Metrics } from 'Constants';
import { useTheme } from "styled-components";
import { McImage } from 'Components';

const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 1023 / 1535;
const height = width * aspectRatio;

const Container = ({ children, footer, pattern }) => {
  
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const asset = pattern === 1 ? Images.backgroundPatternOne : pattern===2 ? Images.backgroundPatternTwo : Images.backgroundPatternThree;

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <View 
              style={{
                height: wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0),
                backgroundColor: theme.colors.grey2,
              }}
            >
                <View 
                  style={{
                    backgroundColor: theme.colors.boxBackground,
                  }}
                >
                    <View 
                      style={{
                        borderBottomLeftRadius: Metrics.rad.xlarge, 
                        overflow: 'hidden', 
                        height: height * 0.61,
                      }}
                    > 
                        <McImage 
                            source={asset} 
                            style={{ width, height, borderBottomLeftRadius: Metrics.rad.xlarge }}
                        />
                    </View>
                </View>
                <View 
                  style={{
                    flex: 1,
                    overflow: 'hidden',
                  }}
                >
                    <McImage 
                        source={asset} 
                        style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }}
                    />
                    <View
                        style={{
                          flex: 1, 
                          borderRadius: Metrics.rad.xlarge, 
                          backgroundColor: theme.colors.boxBackground, 
                          justifyContent: 'center',
                          padding: Metrics.rad.xlarge,
                        }} 
                    >
                        {children}
                    </View>
                </View>
                <View 
                  style={{
                    backgroundColor: theme.colors.grey2, 
                    paddingTop: Metrics.rad.medium
                  }}
                >
                    {footer}    
                    <View height={Math.max(insets.bottom, 16)} />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Container;