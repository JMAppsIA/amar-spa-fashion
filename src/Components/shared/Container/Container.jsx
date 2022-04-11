import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components' 
import { McImage } from 'Components';
import { Images, Colors } from 'Constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const aspectRadio = 750 / 1125;
const height = width * aspectRadio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    <View style={[styles.container, {backgroundColor: Colors.lightBlack}]}>
      <StatusBar barStyle={`light-content`}/>
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
  )
}

export default Container