import React, { Component } from 'react';
import {ImageBackground, View, StyleSheet,Image} from 'react-native';

export default class YourApp extends Component{
componentDidMount(){
const {navigation} = this.props
  setTimeout(() => {navigation.navigate('Page2')   
  }, 3000);
}



render(){
  return (
      <ImageBackground source={require('./img/bg.png')} style={a.image}>
        <Image style={a.logo} source={require('./img/logo.png')}/>

      </ImageBackground>
  );
  }}
const a=StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height:'100%'
  },
  logo:{
    marginTop:180,
    marginLeft:40
  }
})
