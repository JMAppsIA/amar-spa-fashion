import React, { useRef } from "react";
import { useTheme } from "styled-components";
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';
import { Dimensions } from "react-native";

const Dot = ({ index, currentIndex }) => {
  const scale = interpolate(currentIndex, {
      inputRange: [index - 1, index, index + 1],
      outputRange: [1, 1.25, 1],
      extrapolate: Extrapolate.CLAMP,
    });


  const theme = useTheme();

  return (
    <Animated.View
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        backgroundColor: theme.colors.primaryBackground,
        transform:[{scale}]
        }}/>
  );
};

export default Dot;
