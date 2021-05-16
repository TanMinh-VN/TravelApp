import React, { Component } from 'react';
import {View,Text, Image,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Alert,CheckBox} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const page4 = () => {
  return (
    <View>
        <Image style={aa.logo} source={require('../img/logo.png')}/>
        <Text style={aa.up}>Sign Up</Text>
    <SafeAreaView style={aa.login}>
        <View style={aa.name}>
            <TextInput style={aa.input1} value="Male"/>
            < BouncyCheckbox style={{left:-40,bottom:15}} onPress = { () => { } } />    
            <TextInput style={aa.input1} value="Female"/>  
            < BouncyCheckbox style={{left:-40,bottom:15}} onPress = { () => { } } />    
        </View>  
    </SafeAreaView>
    <SafeAreaView style={aa.signup}>
        <TextInput style={aa.input} secureTextEntry={true} placeholder="Nhập mật khẩu"/>
        <TextInput style={aa.input} secureTextEntry={true} placeholder="Nhập lại mật khẩu"/>  
    </SafeAreaView>
    <TouchableOpacity onPress={()=>{Alert.alert('đăng ký thành công')}}>
        <View style={aa.nut}>
        <Text style={{fontSize:25}} >Sign Up</Text>
        </View>
    </TouchableOpacity>
    </View>
  );
}
const aa=StyleSheet.create({
    logo:{
        position:'absolute',
        left:40,
        top:20,
        flex:1
    },
    up:{
        position:'absolute',
        top:150,
        left:130,
        fontSize:25
    },
    name:{
        flexDirection:'row',
        left:-25
    },
    input1: {
        padding:10,
        margin:0,
        flexDirection:'row',
        borderWidth:0.5,
        marginBottom:30,
        borderRadius:10,
        width:150,
        left:10,

    },
    input: {
        padding:10,
        margin:10,
        flexDirection:'row',
        borderWidth:0.5,
        marginBottom:30,
        borderRadius:10,
    },
    login:{
        paddingTop:200,
        paddingLeft:25,
        width:370
    },
    nut:{
        padding:10,
        marginTop:15,
        backgroundColor:'#FA6E4F',
        marginLeft:10,
        alignItems:'center',
        marginRight:10,
        borderRadius:10
    },
    dki:{
        left:220,
        position:'absolute',
        fontSize:14,
        top:30,
    },
    gg:{
        top:20,
        left:150,
    }
})
export default page4