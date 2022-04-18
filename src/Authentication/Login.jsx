import { View } from "react-native";
import React, { useRef } from "react";
import { useTheme } from "styled-components";
import { McText, McButton } from "Components";
import { Container } from "Components/shared";
import { Footer } from 'Authentication/components'
import { McCheckBox, TextInput } from "AuthFormComponents";
import { useFormik } from "formik";
import { LoginInitialValues } from "FormikManager/InitialValues";
import { LoginValidator } from "FormikManager/Validators";
import { BorderlessButton } from "react-native-gesture-handler";
import { Metrics } from "Constants";
const Login = ({ navigation }) => {
  const theme = useTheme();
  
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginValidator,
    initialValues: LoginInitialValues,
    onSubmit: () => navigation.navigate('Home')
  });
  
  const password = useRef(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("Signup")}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <McText title1 align="center" style={{ marginBottom: Metrics.spacing.large }}>
        Welcome Back
      </McText>
      <McText body align="center" style={{ marginBottom: Metrics.spacing.large }}>
        Use your credentials below and login to your account.
      </McText>
      <View>
        <View style={{ marginBottom: Metrics.spacing.medium }}>
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoCompleteType="email"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </View>
        <TextInput
          ref={password}
          icon="key"
          placeholder="Enter your password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
          secureTextEntry
        />
        <View
          style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: Metrics.spacing.small,
              alignItems: 'center',
          }}
        >
          <McCheckBox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <McText button color={theme.colors.primaryBackground}>
              Forgot Password
            </McText>
          </BorderlessButton>
        </View>
        <View 
          style={{
            alignItems: 'center',
            marginTop: Metrics.spacing.medium
          }}
        >
          <McButton
            primary
            label="Log into your account"
            onPress={handleSubmit}
          >
              <McText semi color={theme.colors.white} align='center'>Log into your account</McText>
          </McButton>
        </View>
      </View>
    </Container>
  );
};

export default Login;
