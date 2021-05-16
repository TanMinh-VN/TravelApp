import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet,FlatList,Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import data from '../component/exploredata.json';
import { ScrollView } from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function NotificationScreen({navigation}) {
  return (
      <View style={{backgroundColor:'white'}}>
      <View style={{marginTop:20,backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}>
      <Image style={a.menu} source={require('../img/page4/menubar.png')} ></Image>
      </TouchableOpacity>
      </View>
    
    <ScrollView>
        <View style={{backgroundColor:'white'}}>  
          <FlatList  horizontal={true} style={{}}
          data={data}
          renderItem={({item}) => ( 
             
          <View
              style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30
              }}>
              <View style={{marginHorizontal: 10,top:30,bottom:30}}>
                <TouchableOpacity  onPress={()=>navigation.navigate('tourdetails')}>
                    <Image style={{width:50,height:50,borderRadius:15}} source={{uri:item.img}}/>
                </TouchableOpacity>
                  
              </View>
         </View>
          )}/>
          <Text style={{fontSize:20,left:20,top:20}}>My location</Text>
          <FlatList  horizontal={true} style={{}}
          data={data}
          renderItem={({item}) => ( 
             
          <View
              style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 50
            
              }}>
              <View style={{marginHorizontal: 10,top:35,bottom:30,height:400,width:300}}>
                  <Image style={{width:300,height:390,borderRadius:30}} source={{uri:item.img}}/>
                  <View style={{bottom:150,left:20}}>
                      <TouchableOpacity>
                          <Text style={{color:'white',fontSize:18}}>{item.name}</Text>
                      </TouchableOpacity>
                  </View>
                  <Text style={a.price}>{item.price}</Text>
                  <Text style={{bottom:135,color:'white',width:270,left:20}}>{item.txt}</Text>
                  <Image style={{bottom:125,left:20}}  source={require('../img/page4/location2.png')}/>
                  <View style={{bottom:142,left:40}}>
                    <TouchableOpacity>
                      <Text style={{fontSize:14,color:'white'}}>{item.location}</Text> 
                    </TouchableOpacity>
                  </View>
              </View>
         </View>
          )}/>
       </View> 
    </ScrollView>
    </View>
          
  );
}
  
  const a = StyleSheet.create({
    menu: {
        left: 15,
    },
    price:{
      backgroundColor:'#FA6E4F',
      borderRadius:10,
      width:60,
      padding:5,
      textAlign:'center',
      position:'absolute',
      top:290,
      left:200,
      color:'white'
     }
})
export default NotificationScreen
