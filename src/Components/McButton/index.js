import styled from "styled-components/native";
import { Fonts, Colors, Metrics } from "Constants";
import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');
const McButton = styled.TouchableOpacity`
width: 190px;
height: 50px;
font-size: ${(props) => props.size || Metrics.s16}px;
box-shadow: 0px 10px 16px rgba(192, 220, 207, 0.25);
border-radius: ${(props) => props.border || 10 }px;
justify-content: ${`center`};
padding: 10px;

${({ primary, secondary, success, danger, warning, info, transparent }) => {
  switch (true) {
    case primary: {
      return { backgroundColor: Colors.primary };
    }
    case secondary: {
      return { backgroundColor: Colors.secondary };
    }
    case success: {
      return { backgroundColor: Colors.success };
    }
    case danger: {
      return { backgroundColor: Colors.danger };
    }
    case warning: {
      return { backgroundColor: Colors.warning };
    }
    case info: {
      return { backgroundColor: Colors.info };
    }
    case transparent: {
      return { backgroundColor: Colors.transparent };
    }
    default: {
      return { backgroundColor: Colors.default };
    }
  }
}}
`;

export default McButton;
