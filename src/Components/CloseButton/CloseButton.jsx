import { View, Text } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { RectButton } from "react-native-gesture-handler";

const CloseButton = ({ onPress }) => {
  const theme = useTheme();
  return (
    <RectButton {...{onPress}}>
        <View
        style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: theme.colors.white,
            justifyContent: "center",
            alignItems: 'center',
        }}
        >
        <AntDesign name="close" color={theme.colors.grey2} size={45} style={{textAlign: 'center'}} />
        </View>
    </RectButton>
  );
};

export default CloseButton;
