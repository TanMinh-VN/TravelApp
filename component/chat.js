import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacityBase,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import data from '../component/data.json';
import datas from '../component/exploredata.json';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Directions} from 'react-native-gesture-handler';

function ChatScreen() {
  return (
    <NavigationContainer>
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginTop: 20, backgroundColor: 'white'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                style={a.menu}
                source={require('../img/page4/Author.png')}></Image>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 25, left: 120, marginTop: -12}}>
                Chat
              </Text>
              <Image
                style={{left: 230}}
                source={require('../img/Map/notify.png')}
              />
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <SafeAreaView style={a.searchArea}>
            <TextInput style={a.inputSearch} placeholder="Find your location" />
            <TouchableOpacity style={a.btnSearch}>
              <Image
                style={a.imgSearch}
                source={require('../img/page4/search.png')}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <View>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={a.chatBox}>
              <Image
                style={a.imgChatBox}
                source={require('../img/page4/search.png')}
              />
              <View style={a.messageInfo}>
                <View style={a.messageLine}>
                  <Text style={a.messageName}>Johnaa Wells</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
                <View style={a.messageLine}>
                  <Text style={a.shortMessage}>Đây là message</Text>
                  <Text style={a.messageDetail}>ạvja</Text>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </NavigationContainer>
  );
}
const a = StyleSheet.create({
  messageInfo:{
    //   borderWidth:1,
    paddingTop:5,
    width:'83%',
    paddingLeft:10,

  },
  messageDetail:{
    marginLeft:'auto',
    // borderWidth:1,
    marginRight:10,
    color: '#aaaaaa',
  },
    messageLine:{
    // borderWidth:1,
    width:'100%',
    flexDirection:'row',
  },
  shortMessage: {
    color: '#aaaaaa',
  },
  messageName: {
    fontWeight: 'bold',
    fontSize:20,
  },
  chatBox: {
    flexDirection: 'row',
    marginTop:'2%',
    borderBottomWidth:1,
    borderBottomColor:'#aaaaaa',
    padding:20,
  },
  imgChatBox: {
    width: '17%',
    height: 70,
    borderRadius: 15,
  },
  menu: {
    left: 15,
    textAlign: 'center',
  },
  author: {
    right: 15,
  },
  title: {
    position: 'absolute',
    width: 182,
    left: 20,
    top: 30,
  },
  subt: {
    fontSize: 24,
  },
  inputSearch: {
    height: 40,
    width: '70%',
    paddingLeft: 20,
    marginLeft: '7%',
    borderWidth: 1,
    marginBottom: 40,
    borderRadius: 10,
    color: 'gray',
  },
  searchArea: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
  },
  btnSearch: {
    width: '10%',
    marginLeft: '6%',
  },
  text: {
    left: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bgt: {
    bottom: 20,
  },
  pic1: {
    borderRadius: 18,
    width: 70,
    height: 70,
    flexDirection: 'row',
    left: 30,
  },
  bgpic1: {
    paddingTop: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 30,
    paddingBottom: 40,
    left: 10,
    width: 340,
  },
  price: {
    backgroundColor: '#FA6E4F',
    borderRadius: 10,
    width: 60,
    padding: 5,
    textAlign: 'center',
    top: -60,
    left: 220,
    color: 'white',
  },
});
export default ChatScreen;
