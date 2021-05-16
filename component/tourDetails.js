import React, { Component } from 'react';
import { ImageBackground, Text, View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Pages} from 'react-native-pages';
import Icon from 'react-native-vector-icons/FontAwesome';
import main from './Main';

function tourDetails() {
    return(
    <ScrollView>
            <ImageBackground style={{height:380,top:8}}>
                    <Pages > 
                        <View>
                            <View style={{height:208}}>
                               <Image style={{marginHorizontal:12}} source={require('../img/tourDetail/Capital.png')} />
                            </View>
                            <View style={{top:40}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:20,left:10}} >Capital of Thailand</Text>
                                    <Icon style={{left:100}} name='cloud' size={30} />
                                    <Text style={{left:110,top:5,color:'gray'}}>30°C</Text>
                                </View>
                                <View style={{top:10,flexDirection:'row'}}>
                                    <Image style={{left:10}} source={require('../img/page4/location.png')}/>
                                    <Text style={{left:20,top:-5,fontSize:15,color:'gray'}}>Bangkok, Thailand</Text>
                                </View>
                                <Text style={{padding:5,backgroundColor:'#FA6E4F',width:60,borderRadius:10,textAlign:'center',top:40,left:10}}>
                                    $5 000
                                </Text>
                            </View>
                            

                        </View>
                            
                            <View style={{backgroundColor:'green',height:208}}>
                                <Image style={{marginHorizontal:12,borderRadius:20}} source={require('../img/tourDetail/OiaHyLap.jpg')} />
                            </View>
                            <View style={{backgroundColor:'orange',height:200}}>
                                <Image style={{marginHorizontal:12,borderRadius:20}} source={require('../img/tourDetail/TheSydney.jpg')} />
                            </View>
                            <View style={{backgroundColor:'orange',height:200}}>
                                <Image style={{marginHorizontal:12,borderRadius:20}} source={require('../img/tourDetail/sanbai.jpg')} />
                            </View>

                    </Pages>
                    
            </ImageBackground>
            <View  >
                {/* <Text style={{marginTop:40,fontSize:20,left:10}} >Capital of Thailand</Text> */}
            </View>

        </ScrollView> 
    )
}
export default tourDetails