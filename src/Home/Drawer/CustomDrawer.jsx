import { View } from "react-native";
import React from "react";
import { Dimensions } from "react-native-web";
import { McImage, McText } from "Components";
import { menuItems } from "Mock";
import DrawerItem from "./DrawerItem";
import { useTheme } from "styled-components";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Metrics, Images } from "Constants";
import { Header } from "Components/shared";

const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 769 / 1531;
const height = DRAWER_WIDTH * aspectRatio;

const CustomDrawer = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.2, backgorundColor: theme.colors.boxBackground}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderBottomRightRadius: Metrics.rad.xlarge,
            backgroundColor: theme.colors.grey2,
          }}
        >
          <Header
            title='Menu'
            left={{icon: 'close', onPress: () => navigation.dispatch(DrawerActions.closeDrawer()) }}
            right={{ icon: 'cart', onPress: () => navigation.navigate('Cart') }}
            dark
          />
        </View>
      </View>
      <View style={{flex: 0.8}}>
        <View style={{flex: 1, backgroundColor: theme.colors.boxBackground}} />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderTopLeftRadius: Metrics.rad.xlarge,
            borderBottomRightRadius: Metrics.rad.xlarge,
            backgroundColor: theme.colors.boxBackground,
            // justifyContent: 'center',
            padding: Metrics.spacing.xlarge,
          }}
        >
          <View
            style={{
              position: 'absolute',
              left: (DRAWER_WIDTH / 2) + 85,
              top: -50,
              backgroundColor: theme.colors.primaryBackground,
              borderRadius: 50,
              width: 100,
              height: 100,
            }}
          />
          <View 
          style={{ 
            marginVertical: Metrics.spacing.small, 
            }}
          >
            <McText title1 align='center' size={12}>Donald Duck</McText>
            <McText body align='center' size={2} style={{marginBottom: Metrics.spacing.large}}>donald.duck@disney.com</McText>
          </View>
            {menuItems.map(item => <DrawerItem key={item.icon} {...item} />)}
        </View>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.black,
          width: DRAWER_WIDTH,
          overflow: 'hidden',
          height: height * 0.61,
        }}
      >
        <View 
          // source={Images.drawer}
          style={{ 
            backgroundColor: theme.colors.black,
            width: DRAWER_WIDTH, 
            height, 
            borderTopLeftRadius: Metrics.rad.xlarge
          }}
        />
      </View>
    </View>
  )
}

export default CustomDrawer;

