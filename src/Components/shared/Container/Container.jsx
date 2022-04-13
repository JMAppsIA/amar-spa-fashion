import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components' 
import { McImage } from 'Components';
import { Images, Colors } from 'Constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants'

const { width, height: wHeight } = Dimensions.get('window');
const aspectRadio = 750 / 1125;
const height = width * aspectRadio;

const styles = StyleSheet.create({
    container: {
      height: wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight: 0),
    },
    header: {
      borderBottomLeftRadius: 75,
      overflow: 'hidden',
      height: height*0.61,
    },
    headerImage: {
      width,
      height,
      borderBottomLeftRadius: 75,
    },
    body: {
      flex: 1,
      overflow: 'hidden',
    },
    bodyImage: {
      ...StyleSheet.absoluteFillObject,
      width,
      height,
      top: -height*0.61
    },
    bodyContent: {
      flex: 1,
      borderRadius: 75,
      borderTopLeftRadius: 0,
    },
    footer: {
      height: height/2,
      paddingTop: 30,
    }
})


const Container = ({ children, footer }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <View style={[styles.container, {backgroundColor: Colors.lightBlack}]}>
        <View style={{backgroundColor: theme.colors.boxBackground}}>
          <View style={styles.header}>
              <McImage 
              source={Images.backgroundNine}
              style={styles.headerImage}
              />
          </View>
        </View>
        <View style={styles.body}>
            <McImage 
            source={Images.backgroundNine}
            style={styles.bodyImage}
            />
            <View style={[styles.bodyContent, {backgroundColor: theme.colors.boxBackground}]}>
                {children}
            </View>
        </View>
        <View style={[styles.footer, { backgroundColor: Colors.lightBlack }]}>
          { footer }
          <View style={{ paddingBottom: insets.bottom}}/>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Container