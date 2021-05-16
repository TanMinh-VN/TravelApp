import * as React from 'react';
import { View, Text,Image,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,StatusBar,FlatList,ScrollView, TouchableOpacityBase } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import data from '../component/data.json';
import datas from '../component/exploredata.json';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import NotificationScreen from './notificationScreen';

const Stack = createStackNavigator();





function name() {
    return(
        <Text>
            aaaaaaaaa
        </Text>
    )
}
const drawer=createDrawerNavigator();
function Drawer() {
    return(
        <NavigationContainer>
        <drawer.Navigator>
            <drawer.Screen name='home'component={HomeScreen}>
            </drawer.Screen>
            <drawer.Screen name='Notify' component={NotificationScreen}>     
            </drawer.Screen>
            <drawer.Screen name='Chat' component={name}>     
            </drawer.Screen>
            <drawer.Screen name='Profile' component={name}>     
            </drawer.Screen>
            <drawer.Screen name='Setting' component={name}>     
            </drawer.Screen>
        </drawer.Navigator>
        </NavigationContainer>
    );
}
function HomeScreen({navigation}) {
  return (
      <View style={{backgroundColor:'red'}}>
          <View style={{marginTop:20,backgroundColor:'red'}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image style={a.menu} source={require('../img/page4/menubar.png')} ></Image>
        </TouchableOpacity>
        </View>
      
    <ScrollView>
        
    <View style={{backgroundColor:'white'}}>
        <View style={a.title}>
            <Text style={a.subt}>Get Ready For The Travel Trip!</Text>
        </View>
        <SafeAreaView style={a.login}>
            <TextInput style={a.input} placeholder="Find your location" />
            <TouchableOpacity>
                <Image style={a.search} source={require('../img/page4/search.png')} />
            </TouchableOpacity>
        </SafeAreaView>
        <View>
            <View style={a.bgt}><Text style={a.text}>My location</Text></View>
            <View style={a.bgpic1}>
                <Image style={{left:290,top:-10}} source={require('../img/page4/bookmark.png')} />
            <View style={{flexDirection:'row'}}>
                    <Image style={a.pic1} source={require('../img/page4/pic1.png')} />
                    <View style={{left:50}}>
                        <Text style={{ fontSize:18}}>Winter in Portugal</Text>
                        <View style={{ flexDirection: 'row'}}>
                            <Image style={{top:30}} source={require('../img/page4/location.png')} />
                            <Text style={{ color: 'gray', top:25,left:10 }}>Lisbon</Text>
                        </View>        
                    </View>
                </View>
                <Text style={{ top: 20, left: 20, width: 300, color: 'gray' }}>Portugal there's so much more to discover. Read about the Azores' new wave of eco-travel.</Text>
            </View>
        </View>
        <View>
            <Text style={{top:15,fontWeight:'bold',fontSize:20,left:25}}>Best Place</Text>
            <Text style={{color:'gray',textAlign:'right',right:10}}>See all</Text>

        </View>
        <FlatList  horizontal={true}
            data={data}
            renderItem={({item}) => (
            <View
                style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginBottom: 25,
                }}>
                <View style={{marginHorizontal: 10,width:290,height:180}}>
                    <Image style={{width:290,height:180,top:20,borderRadius:20}} source={{uri:item.img}}/>
                    <View style={{bottom:40,left:20,width:180}}>
                        <TouchableOpacity>
                            <Text style={{color:'white',fontSize:19}}>{item.name}</Text> 
                        </TouchableOpacity>
                    </View>
                    <Text style={a.price}>{item.price}</Text>
                    <Image style={{top:-60,left:20}} source={require('../img/page4/location2.png')}/>
                    <View style={{bottom:77,left:35}}>
                        <TouchableOpacity>
                            <Text style={{color:'white',fontSize:14}}>{item.location}</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            )}
        />
    </View>
    </ScrollView>
    </View>
  );
}

const a = StyleSheet.create({
    menu: {
        left: 15,
        textAlign:'center'
    },
    author: {
        right: 15
    },
    title: {
        position: 'absolute',
        width: 182,
        left: 20,
        top: 30
    },
    subt: {
        fontSize: 24,

    },
    input: {
        height: 40,
        width: 250,
        paddingLeft: 20,
        borderWidth: 1,
        marginBottom: 40,
        borderRadius: 10,
        color: 'gray'
    },
    login: {
        paddingTop: 120,
        paddingLeft: 25,
        width: 370,
        flexDirection: 'row',
    },
    search: {
        left: 20
    },
    text: {
        left: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    bgt: {
        bottom: 20
    },
    pic1: {
        borderRadius: 18,
        width: 70,
        height: 70,
        flexDirection: 'row',
        left: 30
    },
    bgpic1: {
        paddingTop:10,
        backgroundColor: '#E8E8E8',
        borderRadius: 30,
        paddingBottom: 40,
        left: 10,
        width: 340
    },
    price:{
        backgroundColor:'#FA6E4F',
        borderRadius:10,
        width:60,
        padding:5,
        textAlign:'center',
        top:-60,
        left:220,
        color:'white'
       }
})

export default Drawer
