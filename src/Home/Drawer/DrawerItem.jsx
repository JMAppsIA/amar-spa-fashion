import { View, Text } from "react-native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { McText } from "Components";
import { useTheme } from "styled-components";
import { Metrics } from 'Constants';
import { RoundedIconButton } from 'Components/shared';
const DrawerItem = ({ icon, label, color, screen }) => {
  const theme = useTheme();
  return (
    <View style={{
      flexDirection: "row", alignItems: 'center', padding: Metrics.spacing.medium / 2, borderRadius: Metrics.spacing.medium / 2
    }}>
      <RoundedIconButton 
      type={`ionicons`}
      name={icon}
      color={'white'}
      size={30}
      backgroundColor={color}
      align='center'
      />
      <McText align={'center'} medium size={16} color={theme.colors.text1} style={{marginLeft: Metrics.spacing.medium}}>
         {label}
      </McText>
    </View>
  );
};

export default DrawerItem;
