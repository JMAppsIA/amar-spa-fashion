import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { McText } from "Components";
import { useTheme } from "styled-components";
import { Metrics } from "Constants";
import RoundedIconButton from '../RoundedIconButton/RoundedIconButton';

const Header = ({ left, title, right, dark=false }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const color = theme.colors.boxBackground;

  return (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padddingHorizontal: Metrics.spacing.medium,
            marginTop: insets.top
        }}
    >
      <RoundedIconButton
        type={`ionicons`}
        name={left.icon}
        iconRatio={0.4}
        onPress={left.onPress}
        size={44}
        {...{ color }}
        style={{align: 'center'}}
      />
      <McText semi {...{ color }}>
        {title.toUpperCase()}
      </McText>
      {right ? (
        <RoundedIconButton
          type={`ionicons`}
          name={right.icon}
          iconRatio={0.4}
          onPress={right.onPress}
          size={44}
          align="center"
          {...{ color }}
        />
      ) : (
        <View style={{ width: 44 }} />
      )}
    </View>
  );
};

export default Header;
