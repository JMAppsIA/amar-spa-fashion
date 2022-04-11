import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Slide } from "Authentication/shared";
import Animated, { multiply, divide } from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash";
import { useTheme } from "styled-components";
import { Slides } from "Mock";
import { Subslide, Dot } from "Authentication/shared";

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
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    flex: 1,
  },
});

const Onboarding = () => {
  const scroll = useRef(null);
  const theme = useTheme();
  const { scrollHandler, x } = useScrollHandler();
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
          {...scrollHandler}
        >
          {Slides.map(({ title, image }, index) => (
            <Slide key={index} rightSide={!!(index % 2)} {...{ title, image }} />
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
        <View
          style={ styles.footerContent }
        >
          <View style={styles.pagination}>
            {Slides.map((_, index) => (
              <Dot
                key={index+1}
                currentIndex={divide(x, width)}
                index = { index }
              />
            ))}
          </View>
            <Animated.View style={{
                flex: 1,
                flexDirection: 'row',
                width: width * Slides.length,
                transform: [
                    {
                    translateX: multiply(x, -1),
                    },
                ],
            }}> 

                {Slides.map(({ content: { title, description } }, index) => (
                    <Subslide
                    key={index}
                    last={index === Slides.length - 1}
                    {...{ title, description }}
                    onPress={() => {
                        if (scroll.current) {
                        scroll.current.getNode().scrollTo({
                            x: width * (index + 1),
                            animated: true,
                        });
                        }
                    }}
                    />
                ))}
            </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
