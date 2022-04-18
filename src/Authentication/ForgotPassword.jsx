import { View, Text, Linking } from 'react-native'
import React from 'react'
import { Container } from "Components/shared";
import { useFormik } from "formik";
import { ForgotPasswordInitialValues } from "FormikManager/InitialValues";
import { ForgotPasswordValidator } from "FormikManager/Validators";
import { McText, McButton } from 'Components';
import { TextInput } from "AuthFormComponents";
import { useTheme } from 'styled-components';
import { Metrics } from 'Constants';
import { Footer } from 'Authentication/components';

const ForgotPassword = ({ navigation }) => {

  const theme = useTheme();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    validationSchema: ForgotPasswordValidator,
          initialValues: ForgotPasswordInitialValues,
          onSubmit: () => navigation.navigate('PasswordChanged')
  });

  const footer = 
        <Footer 
            title="Not working?" 
            action="Try another way" 
            onPress={() => Linking.openURL("mailto:help@support.com")} 
        />

    return(
        <Container pattern={2} {...{ footer }}>
            <McText title1 align="center" style={{marginBottom: Metrics.spacing.large}}>Forgot Password?</McText>
            <McText body align="center" style={{marginBottom: Metrics.spacing.large}}>
                Enter the email address associated with your account.
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
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                    />
                </View>
                <View 
                  style={{
                    alignItems: 'center', 
                    marginTop: Metrics.spacing.medium

                  }}
                >
                    <McButton primary onPress={handleSubmit} >
                      <McText regular align='center' color={theme.colors.white}>Reset Password</McText>
                    </McButton>
                </View>
            </View>
        </Container>
    )
}

export default ForgotPassword