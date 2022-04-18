import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import RoundedIcon from "./RoundedIcon";

const RoundIconButton = ({ onPress, ...props }) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

export default RoundIconButton;