import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            title: 'Книжный дневник',
            headerStyle: {
              backgroundColor: '#ffc0cb',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'bold',
              fontSize: 20
            }
          }
      }>
            <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}