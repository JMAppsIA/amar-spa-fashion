import React from "react";
import { View } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Metrics } from 'Constants';
import { useTheme } from "styled-components";
import { AntDesign } from '@expo/vector-icons';
import { McText } from 'Components';


const Checkbox = ({ label, checked, onChange }) => {
    const theme = useTheme();
    return (
        <BorderlessButton onPress={() => onChange()} style={{ justifyContent: 'center' }}>
            <View 
                style={{
                    flexDirection: 'row',
                }}
            >
                <View 
                    style={{
                        height: 20,
                        width: 20,
                        marginRight: Metrics.spacing.small,
                        alignItems: 'center', 
                        justifyContent: 'center',
                        borderRadius: Metrics.spacing.small,
                        borderWidth: 1,
                        borderColor: theme.colors.primaryBackground, 
                        backgroundColor: checked ? theme.colors.primaryBackground : theme.colors.white,
                    }}
                >
                    { checked ? <AntDesign name="check" color="white"/> : <></> }
                </View>
                <McText button>{label}</McText>
            </View>
        </BorderlessButton>
    );
};

export default Checkbox;