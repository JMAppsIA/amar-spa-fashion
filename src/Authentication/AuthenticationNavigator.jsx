import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome, Login, Signup, ForgotPassword, PasswordChanged } from 'Authentication';

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
            <AuthenticationStack.Screen name="Signup" component={ Signup } options={{
                gestureEnabled: false,
            }}/>
            <AuthenticationStack.Screen name="ForgotPassword" component={ ForgotPassword } options={{
                gestureEnabled: false,
            }}/>
            <AuthenticationStack.Screen name="PasswordChanged" component={ PasswordChanged } options={{
                gestureEnabled: false,
            }}/>
        </AuthenticationStack.Navigator>
    );
};

export default AuthenticationNavigator