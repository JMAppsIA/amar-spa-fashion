import { View } from "react-native";
import React, { useRef } from "react";
import { useTheme } from "styled-components";
import { McText, McButton } from "Components";
import { Container, Footer } from "Components/shared";
import { TextInput } from "AuthFormComponents";
import { useFormik } from "formik";
import { SignupInitialValues } from "FormikManager/InitialValues";
import { SignupValidator } from "FormikManager/Validators";
const Signup = ({ navigation }) => {
  const theme = useTheme();
  const footer = (
    <Footer title='Ya tienes una cuenta?' action='Ingresa aqui' onPress={() => navigation.navigate('Login')}/>
  );

  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirmation = useRef(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    validationSchema: SignupValidator,
          initialValues: SignupInitialValues,
          onSubmit: (values) => console.log(values)
  });

  return (
    <Container {...{ footer }}>
      <View
        style={{
          padding: 50,
        }}
      >
        <McText semi size={28} align={`center`} style={{ marginBottom: 10 }}>
          Registro 🤓 
        </McText>
        <McText regular size={16} align={`center`} style={{ marginBottom: 20 }}>
          Ingresa tus datos para crear tu cuenta ! 🎉 
        </McText>
              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <TextInput
                  icon="person"
                  placeholder={`Cómo te llamas?`}
                  placeholderTextColor={`#151624`}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  error={errors.fullName}
                  touched={touched.fullName}
                  autoCompleteType='name'
                  autoCapitalize='none'
                  returnKeyType='next'
                  returnKeyLabel='next'
                  onSubmitEditing={() => email?.current.focus()}
                />
              </View>
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
              <View
                style={{
                  marginBottom: 10,
                }}
              >
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
                  returnKeyType='next'
                  returnKeyLabel='next'
                  onSubmitEditing={() => passwordConfirmation?.current.focus()}
                  secureTextEntry
                />
              </View>
              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <TextInput
                  ref={passwordConfirmation}
                  icon="key"
                  placeholder={`Confirma tu contraseña`}
                  placeholderTextColor={`#151624`}
                  onChangeText={handleChange("passwordConfirmation")}
                  onBlur={handleBlur("passwordConfirmation")}
                  error={errors.passwordConfirmation}
                  touched={touched.passwordConfirmation}
                  autoCompleteType='password'
                  autoCapitalize='none'
                  returnKeyType='go'
                  returnKeyLabel='go'
                  onSubmitEditing={() => handleSubmit()}
                  secureTextEntry
                />
              </View>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <McButton primary onPress={handleSubmit}>
                  <McText regular color={theme.colors.white} align={`center`}>
                    Crear a mi cuenta
                  </McText>
                </McButton>
              </View>
            
      </View>
    </Container>
  );
};

export default Signup;
