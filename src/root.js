import React from "react";
import { Fonts, Images } from "Constants";

import ThemeManager from "./Themes";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeNavigator from "Home";
import AuthenticationNavigator from "./Authentication/AuthenticationNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadAssets } from "Hooks";

const AppStack = createStackNavigator();

export default function App() {
  const assets = Images.customAssets;
  const fonts = Fonts.customFonts;

  return (
    <ThemeManager>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator
            screenOptions={{ headerMode: "none", headerShown: false }}
          >
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen name="Home" children={() => (
                <HomeNavigator />
            )} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeManager>
  )
}