import { View, TextInput as RNTextInput, StyleSheet } from 'react-native'
import React, { forwardRef } from 'react'
import {Ionicons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import RoundedIcon from '../../../Components/shared/RoundedIconButton/RoundedIcon';
import { Metrics } from 'Constants';

const TextInput = forwardRef(({placeholder, icon, error, touched, ...props}, ref) => {
  const theme = useTheme();
  const color = !touched? theme.colors.lightGray : (error? theme.colors.error : theme.colors.success);
  const SIZE = Metrics.rad.medium * 2;  

  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: Metrics.rad.small,
        borderColor: color,
        borderWidth: StyleSheet.hairlineWidth,
        padding: Metrics.rad.small
    }}>
        <View style={{
            padding: Metrics.rad.small,
        }}>
            <Ionicons
                name={icon}
                size={16}
                // style={{
                // marginLeft: 20,
                // }}
                color={color}
            />
        </View>
        <View style={{
            flex: 1,
        }}>
          <RNTextInput 
            underlineColorAndroid='transparent' 
            placeholder={placeholder}
            placeholderTextColor={color}
            {...{ref}}
            {...props}/>
        </View>
        {
            touched && (
                <RoundedIcon 
                    name={!error ? 'check' : 'close'}
                    size={SIZE}
                    backgroundColor={!error ? theme.colors.success : theme.colors.error}
                    color={theme.colors.white}
                    align='center'
                />
            )
        }
    </View>
  )
})

export default TextInput