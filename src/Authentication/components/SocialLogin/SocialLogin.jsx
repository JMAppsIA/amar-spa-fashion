import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Images } from 'Constants'
import { McImage } from 'Components' 
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    image: {
        width: 20,
        height: 20,
    }
});

const SocialIcon = ({children}) => {
    return (
        <TouchableOpacity style={styles.content}>
            {children}
        </TouchableOpacity>
    )
}

const SocialLogin = () => {
  return (
    <View style={styles.container}>
        <SocialIcon>
            <McImage source={Images.facebook} style={styles.image}/>
        </SocialIcon>
        <SocialIcon>
            <McImage source={Images.google} style={styles.image}/>
        </SocialIcon>
        <SocialIcon>
            <McImage source={Images.apple} style={styles.image}/>
        </SocialIcon>
    </View>
  )
}

export default SocialLogin