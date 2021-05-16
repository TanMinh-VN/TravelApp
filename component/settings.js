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
  Button,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import data from '../component/data.json';
import datas from '../component/exploredata.json';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Directions} from 'react-native-gesture-handler';
import {ListItem, Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome'
const listPreferance = [
  {
    title: 'Notification',
    icon: 'notice',
  },
  {
    title: 'Language',
    icon: 'flight-takeoff',
  },
  {
    title: 'Currency',
    icon: 'flight-takeoff',
  },
];

const listBanking = [
  {
    title: 'Payment Method',
    icon: 'notice',
  },
  {
    title: 'Privacy Policy',
    icon: 'flight-takeoff',
  },
  {
    title: 'Terms of Use',
    icon: 'flight-takeoff',
  },
];
function Settings() {
  return (
    <NavigationContainer>
      <View>
        <TouchableOpacity style={a.UserInfo}>
          <Image style={{width:40, marginLeft:20, marginTop:20,marginRight:10}} source={require('../img/page2/heart.png')}></Image>
          <View style={a.UserTitle}>
            <View>
              <Text>quần què</Text>
              <Text>sample@gmail.com</Text>
            </View>
            <View>
              <Icon style={a.UserArrow} name="chevron-right" size={60} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={a.Options}>
          <Text style={{fontSize: 20}}>Preferance</Text>
          <View>
            {listPreferance.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Icon name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}
          </View>
        </View>
        <View style={a.Options}>
          <Text style={{fontSize: 20}}>Banking & Payment</Text>
          <View>
            {listBanking.map((item, i) => (
              <ListItem key={i} bottomDivider>
                <Icon name={item.icon} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))}
          </View>
        </View>
        <TouchableOpacity style={a.btnSignOut}>
                <Text>LOG OUT</Text>

        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
}
const a = StyleSheet.create({
  btnSignOut:{
    backgroundColor:'orange',
    borderWidth:1,
    height:'8%',
    width:'80%',
    marginLeft:'10%',
    borderRadius:10,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
  },
  Options: {
    marginTop: '15%',
  },
  UserArrow:{
    marginLeft:110,
  },
  UserTitle:{
    flexDirection: 'row',
    marginTop:15,
    marginLeft:20,
  },
  UserInfo: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: '20%',
    height: 90,
  },
});
export default Settings;
