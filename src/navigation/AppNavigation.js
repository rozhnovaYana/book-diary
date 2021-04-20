import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { BookScreen } from "../screens/BookScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function AppNavigation() {
  const HomeScreen = () => {
   return  <Stack.Navigator
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
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  }
  const BookedScreen = () => {
    return <Stack.Navigator
      screenOptions={
        {
          title: 'Избранное',
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
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  }
   const LibraryScreen = () => {
   return  <Stack.Navigator
      screenOptions={
        {
          title: 'Библиотека',
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
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  }
   const StatisticScreen = () => {
   return  <Stack.Navigator
      screenOptions={
        {
          title: 'Статистика',
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
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  }
  return (
      <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        tabBarOptions={{
          activeTintColor: "#c71585",
          showLabel: false,
          inactiveTintColor:"black"
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({color, size})=><Ionicons name="book-outline" size={size} color={color} />}} />
        <Tab.Screen name="Booked" component={BookedScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="ios-star-outline" size={size} color={color} /> }} />
         <Tab.Screen name="Library" component={LibraryScreen} options={{tabBarIcon:({color, size})=><Ionicons name="library" size={size} color={color}/>}} />
        <Tab.Screen name="Statistic" component={StatisticScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="ios-analytics-sharp" size={size} color={color}/>}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}