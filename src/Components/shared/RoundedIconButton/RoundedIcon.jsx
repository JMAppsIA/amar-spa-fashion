import { View } from 'react-native'
import React from 'react'
import { McText } from 'Components'
import { Ionicons, AntDesign } from "@expo/vector-icons";

const RoundedIcon = ({name, size, color, backgroundColor, iconRatio=0.7, type, align}) => {
  const iconSize = size * iconRatio;
  return (
    <View
      style={{
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: align,
        borderRadius: size / 2,
        backgroundColor, 
      }}
    >
      <McText style={{ width: iconSize, height: iconSize }} {...{ color }}>
        {
          type === 'ionicons' ? (
            <Ionicons size={iconSize} {...{ name }} />
          ) : (
            <AntDesign size={iconSize} {...{ name }}/>
          )
        }
      </McText>
    </View>
  )
}

export default RoundedIcon