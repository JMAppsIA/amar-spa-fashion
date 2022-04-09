import styled from "styled-components/native";
import { Fonts, Colors, Metrics } from "Constants";

const McButton = styled.TouchableOpacity`
  font-size: ${(props) => props.size || Metrics.s16}px;
  text-align: ${(props) => props.align || "center"};
  align-items: ${`center`};
  border-radius: ${(props) => props.border || 10 }px;
  box-shadow: 0px 10px 16px rgba(192, 220, 207, 0.25);
  width: 188px;
  height: 52px;
  padding-top: 15px;

  ${({ primary, secondary, success, danger, warning, info }) => {
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
      default: {
        return { backgroundColor: Colors.default };
      }
    }
  }}
`;

export default McButton;
