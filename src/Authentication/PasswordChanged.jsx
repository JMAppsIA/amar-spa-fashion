import { View, Text } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Container } from "Components/shared";
import { useTheme } from "styled-components";
import { McText, McButton } from "Components";
import { CloseButton } from "Components";

const PasswordChanged = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Container
      footer={
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CloseButton onPress={()=> navigation.navigate('Login')} />
        </View>
      }
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View 
            style={{ 
                height: 80, 
                width: 80, 
                borderRadius: 40,
                backgroundColor: theme.colors.primaryBackground,
                opacity: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 50
                }}>
          <McText bold align={`center`}>
            <AntDesign name="check" color={theme.colors.success} size={32}/>
          </McText>
        </View>
        <McText semi size={28} align={`center`} style={{ marginBottom: 10 }}>
          Tu contraseña fue cambiada correctamente! 🎉 
        </McText>
        <McText regular size={16} align={`center`} style={{ marginBottom: 20 }}>
          Por favor, cierrra esta ventana e ingresa nuevamente 🥳 
        </McText>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <McButton primary onPress={() => navigation.navigate("Login")}>
            <McText regular color={theme.colors.white} align={`center`}>
              Ingresar a mi cuenta
            </McText>
          </McButton>
        </View>
      </View>
    </Container>
  );
};

export default PasswordChanged;
