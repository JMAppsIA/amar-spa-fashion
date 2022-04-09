import { View, StyleSheet, Button } from 'react-native'
import { McText, McButton } from 'Components'
import React from 'react'
import { useTheme } from 'styled-components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,
    },
    title: {
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: 12
    },
    description: {
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 40
    },
    button: {

    }
})

const Subslide = ({title, description, last, onPress}) => {
  
  const theme = useTheme();  
  return (
    <View style={styles.container}>
      <McText semi size={24} color={theme.colors.text1} style={styles.title}>{ title }</McText>
      <McText regular size={16} color={theme.colors.text3} style={styles.description}>{ description }</McText>
      <McButton primary={last? true : false} {...{ onPress }}>
          <McText regular color={last && theme.colors.white} align={`center`}>{last ? `Empecemos` : `Siguiente`}</McText>
      </McButton>
    </View>
  )
}

export default Subslide