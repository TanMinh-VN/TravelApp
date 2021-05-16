import React, { Component } from 'react';
import { View,Text,Image,StyleSheet, ColorPropType, Button,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import {Pages} from 'react-native-pages';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const page2 = ({navigation}) => {
    return (
        <Pages>   
        <View>
            <Image style={b.ng} source={require('../img/page2/p2-ng.png')}/>
            <Image style={b.tr} source={require('../img/page2/p2-tr.png')}/>
            <Image style={b.pp} source={require('../img/page2/p2-pp.png')}/>
            <Image style={b.trai} source={require('../img/page2/p2-trai.png')}/>
            <Image style={b.tren} source={require('../img/page2/p2-tren.png')}/>
            <Image style={b.tree} source={require('../img/page2/p2-tree.png')}/>
            
            <Text style={b.main}>Explore</Text>
            <Text style={{top:550,width:240,left:20}}>Explore your favourite destination around the world.</Text>
        </View> 
        <View >
            <Image style={b.ng} source={require('../img/page2/p2-ng.png')}/>
            <Image style={b.tr} source={require('../img/page2/p2-tr.png')}/>
            <Image style={b.pp} source={require('../img/page2/p2-pp2.png')}/>
            <Image style={b.trai} source={require('../img/page2/clock.png')}/>
            <Image style={b.tren} source={require('../img/page2/ball.png')}/>
            <Image style={b.tree} source={require('../img/page2/p2-tree.png')}/>
            
            <Text style={b.main}>Easy Peasy</Text>
            <Text style={{top:550,width:240,left:20}}>Make your travel experince very easy and peasy.</Text>
        </View> 
        <View >
            <Image style={b.ng} source={require('../img/page2/p2-ng.png')}/>
            <Image style={b.tr} source={require('../img/page2/p2-tr.png')}/>
            <Image style={b.pp} source={require('../img/page2/p2-pp3.png')}/>
            <Image style={b.trai} source={require('../img/page2/bell.png')}/>
            <Image style={b.tren} source={require('../img/page2/heart.png')}/>
            <Image style={b.tree} source={require('../img/page2/p2-tree.png')}/>
            <Text style={b.main}>Enjoy Tour</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{top:550,width:240,left:20}}>Enjoy your favourite destination with your love one.</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Page3')} >
            <Text style={{fontSize:15}}>Continue</Text>
            <Icon  name="chevron-right" size={20}/>
            </TouchableOpacity>
            </View>
        </View> 
        </Pages>
      
    );
}
const b=StyleSheet.create({
    pp:{
        position:'absolute',
        marginTop:100,
        marginLeft:120,
    },
    trai:{
        position:'absolute',
        left:250,
        top:379,
        
    },
    tren:{
        position:'absolute',
        top: 64
    },
    tree:{
        position:'absolute',
        top: 273,
    },
    main:{
        position:'absolute',
        fontSize:40,
        left:18,
        top:480
    },
    ng:{
        position:'absolute',
        top:159,
        left:48
    },
    tr:{
        position:'absolute',
        left:63,
        top:174
    }
})
export default page2