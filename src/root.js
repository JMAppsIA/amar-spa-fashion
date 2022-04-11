import React, { useState, useEffect } from 'react';
import { ActivityIndicator,StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { Fonts } from 'Constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome } from 'Authentication';
import ThemeManager from './Themes';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AuthenticationStack.Screen name="OnBoarding" component={ Onboarding } />
            <AuthenticationStack.Screen name="Welcome" component={ Welcome } />
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
                <AuthenticationNavigator />
            </NavigationContainer>
        </ThemeManager>
    ) : (
        <ActivityIndicator size="small"></ActivityIndicator>
    );
};

export default App;
