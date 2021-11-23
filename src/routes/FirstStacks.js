import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import Paper from '../screens/Paper';

const Stack = createNativeStackNavigator();

export default function FirstStacks() {

    return (
        <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Home',
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name='Paper'
                component={Paper}
                options={{
                    title: 'Paper',
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}