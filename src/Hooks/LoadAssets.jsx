import { View, Text } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AppLoading from "expo-app-loading";
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`

const usePromiseAll = (promises, cb) => 
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })
  })

const useLoadAssets = async (assets, fonts) => {
  const [ready, setReady] = useState(false);
  usePromiseAll(
  ...assets.map((asset) => [Font.loadAsync(fonts), Asset.loadAsync(asset)]), () => setReady(true)
  );
  return ready;
};

const LoadAssets = ({ assets, fonts, children}) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState();
  const ready = useLoadAssets(assets || [], fonts || {});

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        );

        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  );
  
  
return !ready || !isNavigationReady ? (
    <AppLoading />
  ): (
    <NavigationContainer {...{ onStateChange, initialState }}>
      <StatusBar style="light"/>
      {children}
    </NavigationContainer>
  )
}

export default LoadAssets