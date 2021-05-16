import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import notificationScreen from './component/notificationScreen';
import tourDetails from './component/tourDetails';
import home from './component/Home';
import MyTabs from './component/Main';
import App from './App';
import Page2 from './component/page2'; 
import page2 from './component/page2';
import page3 from './component/page3';
import Main from './component/Main';
const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Plashscreen'component={App} options={{headerShown:false }} ></Stack.Screen>
        <Stack.Screen name='Page2'component={page2} options={{headerShown:false }} ></Stack.Screen>
        <Stack.Screen name='Page3'component={page3} options={{headerShown:false }} ></Stack.Screen>
        <Stack.Screen name='Main'component={Main} options={{headerShown:false }} ></Stack.Screen>
          <Stack.Screen name='home'component={home} options={{headerShown:false }} ></Stack.Screen>
          <Stack.Screen name="notify" component={notificationScreen} options={{}} />
          <Stack.Screen name="tourdetails"component={tourDetails} options={{title:''}} />
          {/* <Stack.Screen name="MyTab"component={MyTabs} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
export default MyStack