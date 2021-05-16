/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './component/Home';
import page2 from './component/page2';
import page3 from './component/page3';
import page4 from './component/page4';
import MyDrawer from './component/drawer';
import MyTabs from './component/Main';
import tourDetails from './component/tourDetails';
import MyStack from './Container';
import ChatScreen   from './component/chat';
import Settings from './component/settings';

AppRegistry.registerComponent(appName, () => Settings);
