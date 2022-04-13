import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { Fonts } from 'Constants';
import { NavigationContainer } from '@react-navigation/native';

import ThemeManager from './Themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import HomeNavigator from 'Home';
import AuthenticationNavigator from './Authentication/AuthenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const App = ({ params }) => {
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    
    /* Loading custom fonts in async */
    const _loadAssetsAsync = async () => {
        await Font.loadAsync(Fonts.customFonts);
        setAssetsLoaded(true);
    };
    
    useEffect(() => {
        _loadAssetsAsync();
    });

    return assetsLoaded ? (
            <ThemeManager>
                <NavigationContainer>
                    <StatusBar style='light'/>
                    <SafeAreaProvider>
                        <AppStack.Navigator screenOptions={{ headerMode: 'float', headerShown: false}}>
                            <AppStack.Screen name="Authentication" component={ AuthenticationNavigator } options={{
                                headerShown: false,
                            }}/>
                            <AppStack.Screen name="Home" component={ HomeNavigator }/>
                        </AppStack.Navigator>
                    </SafeAreaProvider>
                </NavigationContainer>
            </ThemeManager>
    ) : (
        <ActivityIndicator size="small"></ActivityIndicator>
    );
};

export default App;
