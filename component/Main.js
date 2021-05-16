import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../component/Home';
import NotificationScreen from '../component/notificationScreen';
import tourDetails from '../component/tourDetails';
// import HomeScreen from '../component/page5';

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator  tabBarOptions={{activeTintColor:'orange'}}>
      <Tab.Screen name="Home"  component={HomeScreen} 
      options={{tabBarIcon:({color})=><Icon name='home' size={30} color={color} />}}/>
      <Tab.Screen name="Notify" component={NotificationScreen}
      options={{tabBarIcon:({color})=><Icon name='bell' size={30} color={color}/>}}/>
     {/* <Tab.Screen name="Chat" component={ChatScreen}
     options={{tabBarIcon:({color})=><Icon name='comments' size={30} color={color}/>}}/> */}
    <Tab.Screen name="Map" component={MapScreen}
     options={{tabBarIcon:({color})=><Icon name='map-marker' size={30} color={color}/>}}/>
    <Tab.Screen name="User" component={UserScreen}
     options={{tabBarIcon:({color})=><Icon name='user' size={30} color={color}/>}}/>
    
    </Tab.Navigator>
    
    
  );
}

export default function App() {
  return (
    
      <MyTabs />
      
  );
}
