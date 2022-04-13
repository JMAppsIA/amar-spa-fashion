import { View, TextInput as RNTextInput } from 'react-native'
import React, { forwardRef, useState } from 'react'
import {Ionicons, AntDesign } from "@expo/vector-icons";
import { useTheme } from 'styled-components';

const TextInput = forwardRef(({placeholder, icon, error, touched, ...props}, ref) => {
  const theme = useTheme();
  const color = !touched? theme.colors.lightGray : (error? theme.colors.error : theme.colors.success);

  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 10,
        borderColor: color,
        borderWidth: 1,
    }}>
        <View style={{
            padding: 10,
        }}>
            <Ionicons
                name={icon}
                size={16}
                style={{
                marginLeft: 20,
                }}
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
                <View style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20,
                    marginRight: 5,
                    backgroundColor: !error ? theme.colors.success: theme.colors.error,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <AntDesign name={!error ? 'check': 'close'} color={theme.colors.white}/>
                </View>
            )
        }
    </View>
  )
})

export default TextInput