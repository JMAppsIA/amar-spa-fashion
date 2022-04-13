import { View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { McText } from 'Components';
import { RectButton } from 'react-native-gesture-handler';

const McCheckBox = ({label, checked, onChange}) => {
  const theme = useTheme();
  return (
      <RectButton onPress={() => onChange()} style={{justifyContent: 'center'}}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View style={{
                height: 20,
                width: 20,
                borderRadius: 5,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: theme.colors.primaryBackground,
                backgroundColor: checked? theme.colors.primaryBackground : theme.colors.white
            }}>
                <AntDesign name='check' color='white'/>
            </View>
            <McText align={`center`}>{label}</McText>
        </View>
      </RectButton>
  )
};

export default McCheckBox