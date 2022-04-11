import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { McText, McImage } from 'Components'
import { useTheme } from 'styled-components/native'

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    overflow: 'hidden'
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    lineHeight: 80
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: 75,
    justifyContent: 'center'
  }
})
const Slide = ({title, rightSide, image}) => {
  const theme = useTheme()
  const transform = [
    { translateY: (0.61 * height - 100 ) / 2},
    { translateX: rightSide ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: rightSide ? '-90deg' : '90deg' },
  ]
  return (
    <View style={ styles.container }>
      <View style={styles.underlay}>
        <McImage source={image} style={styles.image}/>
      </View>
      <View style={ [styles.titleContainer, { transform }] }>
        <McText semi size={65} color={theme.colors.boxBackground} style={styles.title}>{title}</McText>
      </View>
    </View>
  )
}

export default Slide