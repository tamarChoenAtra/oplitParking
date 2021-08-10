import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CreatePark from '../components/createPark/CreatePark';
import InitComponent from '../components/initComponent/InitComponent';

const Stack = createNativeStackNavigator();

export const Routes = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="InitComponent"
            >
                <Stack.Screen
                    name="CreatePark"
                    component={CreatePark}
                />
                <Stack.Screen
                    name="InitComponent"
                    component={InitComponent}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
