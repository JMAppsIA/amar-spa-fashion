import styled from "styled-components/native";
import { Fonts, Colors, Metrics } from "Constants";

const McText = styled.Text`
  /* default black */
  color: ${(props) => props.color || Colors.black};
  /* default 16px */
  font-size: ${(props) => props.size || Metrics.s16}px;
  /* default left */
  text-align: ${(props) => props.align || "left"};
  ${({uppercase}) => {
    switch(true) {
      case uppercase: {
        return { textTransform: 'uppercase'}
      }
    }
  }}
  ${({
    black,
    blackItalic,
    bold,
    boldItalic,
    heavy,
    heavyItalic,
    light,
    lightItalic,
    medium,
    mediumItalic,
    regular,
    regularItalic,
    semi,
    semiItalic,
    thin,
    thinItalic,
    ultraLight,
    ultraLightItalic,
  }) => {
    switch (true) {
      case black: {
        return { fontFamily: Fonts.type.black };
      }
      case blackItalic: {
        return { fontFamily: Fonts.type.blackItalic };
      }
      case bold: {
        return { fontFamily: Fonts.type.bold };
      }
      case boldItalic: {
        return { fontFamily: Fonts.type.boldItalic };
      }
      case heavy: {
        return { fontFamily: Fonts.type.heavy };
      }
      case heavyItalic: {
        return { fontFamily: Fonts.type.heavyItalic };
      }
      case light: {
        return { fontFamily: Fonts.type.light };
      }
      case lightItalic: {
        return { fontFamily: Fonts.type.lightItalic };
      }
      case medium: {
        return { fontFamily: Fonts.type.medium };
      }
      case mediumItalic: {
        return { fontFamily: Fonts.type.mediumItalic };
      }
      case regular: {
        return { fontFamily: Fonts.type.regular };
      }
      case regularItalic: {
        return { fontFamily: Fonts.type.regularItalic };
      }
      case semi: {
        return { fontFamily: Fonts.type.semiBold };
      }
      case semiItalic: {
        return { fontFamily: Fonts.type.semiBoldItalic };
      }
      case thin: {
        return { fontFamily: Fonts.type.thin };
      }
      case thinItalic: {
        return { fontFamily: Fonts.type.thinItalic };
      }
      case ultraLight: {
        return { fontFamily: Fonts.type.ultraLight };
      }
      case ultraLightItalic: {
        return { fontFamily: Fonts.type.ultraLightItalic };
      }
    }
  }}
  ${({ h1, h2, h3, h4, h5, h6 }) => {
    switch (true) {
      case h1: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h1}px` };
      }
      case h2: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h2}px` };
      }
      case h3: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h3}px` };
      }
      case h4: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h4}px` };
      }
      case h5: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h5}px` };
      }
      case h6: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h6}px` };
      }
    }
  }}
  ${({ hero, title1, title2, title3, body, button, header }) => {
    switch (true) {
      case hero: {
        return {
          fontFamily: Fonts.type.bold,
          fontSize: `${Metrics.hero}px`,
          lineHeight: `${Metrics.hero}px`,
        };
      }
      case title1: {
        return {
          fontFamily: Fonts.type.semiBold,
          fontSize: `${Metrics.title1}px`,

        };
      }
      case title2: {
        return {
          fontFamily: Fonts.type.semiBold,
          fontSize: `${Metrics.title2}px`,
          lineHeight: `${Metrics.title2+6}px`,
        };
      }
      case title3: {
        return {
          fontFamily: Fonts.type.semiBold,
          fontSize: `${Metrics.title3}px`,
        };
      }
      case body: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body}px`,
          lineHeight: `${Metrics.body+8}px`
        };
      }
      case button: {
        return {
          fontFamily: Fonts.type.medium,
          fontSize: `${Metrics.button}px`,
        };
      }
      case header: {
        return {
          fontFamily: Fonts.type.semiBold,
          fontSize: `${Metrics.header}px`,
          lineHeight: `${Metrics.header*2}px`,
        };
      }
    }
  }}
`;

export default McText;
