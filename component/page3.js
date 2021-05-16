import React, { Component } from 'react';
import {View,Text, Image,StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Alert} from 'react-native';

const page3 = ({navigation}) => {
  return (
    <View>
        <Image style={aa.logo} source={require('../img/logo.png')}/>
        <Text style={aa.In}>Log In</Text>
        <View style={{top:200,left:13}}>
            <Text style={{left:15,bottom:-14}}>Email</Text>
            <SafeAreaView style={aa.login}>
                <TextInput style={aa.input} placeholder="TeoEm@gmail.com"/>
            </SafeAreaView>
            
        </View>
        <View style={{top:180,left:13}}>
            <Text style={{left:15,bottom:-14}}>Password</Text>
            <SafeAreaView style={{}}>
                <TextInput style={aa.input} secureTextEntry={true} placeholder="Password"/>  
            </SafeAreaView>  
        </View>
        <View style={{marginTop:166}}>
            <TouchableOpacity>
                <Text style={{color:'#FA6E4F',textAlign:'center'}}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:18}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
                <View style={aa.nut}>
                <Text style={{fontSize:25}} >Log In</Text>
                </View>
            </TouchableOpacity>
            <Text style={{textAlign:'center',top:5,color:'gray'}}>Or</Text>
        </View>
        <View style={{backgroundColor:'#F5F5F5',top:10,width:320,left:20, borderRadius:10}}>
            <TouchableOpacity onPress={()=>{Alert.alert('đăng nhập thành công')}}>
                <Image style={aa.gg} source={require('../img/page3/gg.png')}/>
                <Text style={{textAlign:'center',top:-10,padding:10}}>Log In With Google</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
}
const aa=StyleSheet.create({
    logo:{
        position:'absolute',
        left:40,
        top:25,
        flex:1
    },
    In:{
        position:'absolute',
        top:160,
        left:150,
        fontSize:25
    },
    input: {
        padding:10,
        margin: 20,
        left:-10,
        borderWidth:0.5,
        marginBottom:30,
        borderRadius:10 
    },
    nut:{
        padding:10,
        backgroundColor:'#FA6E4F',
        marginLeft:22,
        alignItems:'center',
        marginRight:19,
        borderRadius:10
    },
    dki:{
        left:220,
        position:'absolute',
        fontSize:14,
        top:30,
    },
    gg:{
        flexDirection:'row',
        top:20,
        left:70
    }
})
export default page3