import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Slide } from "Authentication/shared";
import Animated, { multiply } from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";
import { useTheme } from "styled-components";
import { Slides } from "Mock";
import { Subslide } from "Authentication/shared";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: 0.61 * height,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    flexDirection: "row",
    flex: 1,
  },
});

const Onboarding = () => {
  const scroll = useRef(null);
  const theme = useTheme();
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: Slides.map((_, i) => i * width),
    outputRange: Slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={`fast`}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {Slides.map(({ title }, index) => (
            <Slide key={index} rightSide={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * Slides.length,
              flex: 1,
              transform: [
                {
                  translateX: multiply(x, -1),
                },
              ],
            },
          ]}
        >
          {Slides.map(({ content: { title, description } }, index) => (
            <Subslide
              key={index}
              last={index === Slides.length - 1}
              {...{ title, description }}
              onPress={() => {
                  if(scroll.current) {
                      scroll.current.scrollTo({ x: width * (index + 1), animated: true})
                  }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
