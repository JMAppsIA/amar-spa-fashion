import React, { useState, useEffect } from 'react';
import { ActivityIndicator,StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { Fonts } from 'Constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome, Login } from 'Authentication';

import ThemeManager from './Themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AuthenticationStack.Screen name="OnBoarding" component={ Onboarding } />
            <AuthenticationStack.Screen name="Welcome" component={ Welcome } options={{
                gestureEnabled: false,
            }}/>
            <AuthenticationStack.Screen name="Login" component={ Login } options={{
                gestureEnabled: false,
            }}/>
        </AuthenticationStack.Navigator>
    );
};

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
                    <SafeAreaProvider>
                        <AuthenticationNavigator />
                    </SafeAreaProvider>
                </NavigationContainer>
            </ThemeManager>
    ) : (
        <ActivityIndicator size="small"></ActivityIndicator>
    );
};

export default App;
