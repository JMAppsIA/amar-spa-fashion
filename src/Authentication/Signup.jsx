import { View } from "react-native";
import React, { useRef } from "react";
import { useTheme } from "styled-components";
import { McText, McButton } from "Components";
import { Container } from "Components/shared";
import { useFormik } from "formik";
import { SignupInitialValues } from "FormikManager/InitialValues";
import { SignupValidator } from "FormikManager/Validators";
import { Metrics } from "Constants";
import { Footer } from 'Authentication/components';
import { TextInput } from "AuthFormComponents";


const Signup = ({ navigation }) => {
  const theme = useTheme();
  const { 
    handleChange, handleBlur, handleSubmit,
    errors, touched 
} = useFormik({
    validationSchema: SignupValidator,
    initialValues: SignupInitialValues,
    onSubmit: () => navigation.navigate('Home')
});
  const password = useRef(null);
    const confirmPassword = useRef(null);
    const footer = <Footer title="Already have an account?" action="Login here" onPress={() => navigation.navigate('Login')} />

    return (
        <Container pattern={1} {...{footer}}>
            <McText title1 align="center" style={{marginBottom: Metrics.spacing.large}}>Create account</McText>
            <McText body align="center" style={{marginBottom: Metrics.spacing.large}}>
                Let us know your email and password.
            </McText>
            <View>
                <View style={{marginBottom: Metrics.spacing.medium}}>
                    <TextInput 
                        icon="mail" 
                        placeholder="Enter your email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')} 
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType="email"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </View>
                <View style={{marginBottom: Metrics.spacing.medium}}>
                    <TextInput 
                        ref={password}
                        icon="key" 
                        placeholder="Enter your password" 
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => confirmPassword.current?.focus()}
                        secureTextEntry
                    />
                </View>
                <TextInput 
                    ref={confirmPassword}
                    icon="key" 
                    placeholder="Confirm your password" 
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                />
                <View style={{ alignItems: 'center', marginTop: Metrics.spacing.medium}}>
                    <McButton primary onPress={handleSubmit}>
                      <McText semi color={theme.colors.white} align='center'>Create your account</McText>
                    </McButton>
                </View>
            </View>
        </Container>
    )
};

export default Signup;
