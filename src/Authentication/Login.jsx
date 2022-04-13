import { View } from "react-native";
import React, { useRef } from "react";
import { useTheme } from "styled-components";
import { McText, McButton } from "Components";
import { Container, Footer } from "Components/shared";
import { McCheckBox, TextInput } from "AuthFormComponents";
import { useFormik } from "formik";
import { LoginInitialValues } from "FormikManager/InitialValues";
import { LoginValidator } from "FormikManager/Validators";
import { BorderlessButton } from "react-native-gesture-handler";
const Login = ({ navigation }) => {
  const theme = useTheme();
  const footer = (
    <Footer title='No tienes una cuenta?' action='Registrate aqui' onPress={() => navigation.navigate('Signup')}/>
  );

  const password = useRef(null);

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

  return (
    <Container {...{ footer }}>
      <View
        style={{
          padding: 50,
        }}
      >
        <McText semi size={28} align={`center`} style={{ marginBottom: 10 }}>
          Bienvenido! 🥳{" "}
        </McText>
        <McText regular size={16} align={`center`} style={{ marginBottom: 20 }}>
          Ingresa tus datos en el formulario e ingresa a tu cuenta!
        </McText>

              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <TextInput
                  icon="mail"
                  placeholder={`Ingresa tu correo electrónico`}
                  placeholderTextColor={`#151624`}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  autoCompleteType='email'
                  autoCapitalize='none'
                  returnKeyType='next'
                  returnKeyLabel='next'
                  onSubmitEditing={() => password?.current.focus()}
                />
              </View>
              <TextInput
                ref={password}
                icon="key"
                placeholder={`Ingresa tu contraseña`}
                placeholderTextColor={`#151624`}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
                autoCompleteType='password'
                autoCapitalize='none'
                returnKeyType='go'
                returnKeyLabel='go'
                onSubmitEditing={() => handleSubmit()}
                secureTextEntry
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: 'center',
                  marginVertical: 10,
                }}
              >
                <McCheckBox label="Recuerdame" checked={values.rememberUser} onChange={() => setFieldValue('rememberUser', !values.rememberUser)}/>
                <BorderlessButton transparent onPress={() => navigation.navigate('ForgotPassword')}>
                  <McText semi color={theme.colors.primaryBackground}>
                    Olvidé mi contraseña
                  </McText>
                </BorderlessButton>
              </View>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <McButton primary onPress={handleSubmit}>
                  <McText regular color={theme.colors.white} align={`center`}>
                    Ingresar a mi cuenta
                  </McText>
                </McButton>
              </View>
            
      </View>
    </Container>
  );
};

export default Login;
