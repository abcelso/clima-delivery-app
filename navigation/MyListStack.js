import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyListScreen from './../screen/myList/MyListScreen';
import SearchCityScreen from '../screen/SearchCityScreen';
import CityScreen from '../screen/myList/CityScreen';

const Stack = createStackNavigator();

const MyListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyListScreen" component={MyListScreen} />
      <Stack.Screen name="CityScreen" component={CityScreen} />
    </Stack.Navigator>
  );
};

export default MyListStack;

const styles = StyleSheet.create({});
