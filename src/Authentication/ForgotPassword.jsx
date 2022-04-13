import { View, Text, Linking } from 'react-native'
import React from 'react'
import { Container, Footer } from "Components/shared";
import { useFormik } from "formik";
import { ForgotPasswordInitialValues } from "FormikManager/InitialValues";
import { ForgotPasswordValidator } from "FormikManager/Validators";
import { McText, McButton } from 'Components';
import { TextInput } from "AuthFormComponents";
import { useTheme } from 'styled-components';



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

  const footer = (
    <Footer title='No funcionó?' action='Prueba otra forma' onPress={() => Linking.openURL('mailto:support@amarspa.pe')}/>
  );

  return (
    <Container {...{ footer }}>
      <View
        style={{
          padding: 50,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <McText semi size={28} align={`center`} style={{ marginBottom: 10 }}>
          Olvidaste tu contraseña?
        </McText>
        <McText regular size={16} align={`center`} style={{ marginBottom: 20 }}>
          Ingresa el correo asociado a tu cuenta  
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
                  returnKeyType='go'
                  returnKeyLabel='go'
                  onSubmitEditing={() => handleSubmit()}
                />
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
  )
}

export default ForgotPassword