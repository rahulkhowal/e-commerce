/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { 
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './Screens/Header'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './src/Store/index';
import Notification from './Screens/Notification'
import Cart from './Screens/Cart'
import Save from './Screens/Save'
import Sidebar from './components/Sidebar'
import NavigationService from './components/NavigationService'
import HeaderMultipleIconExample from './Screens/Header'
import LoginScreen from './Screens/LoginScreen'
const App = () => (
  <Provider store={store}>
    <AppContainer 
      ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
      }}
     />
  </Provider>
)
const AppNavigator = createStackNavigator({
  Header: {
    screen: HeaderMultipleIconExample,
    navigationOptions: {
      header: null,
      
    }
  },
  Cart: {
    screen: Cart
  },
  Notification:{
    screen: Notification
  },
  Save:{
    screen:Save
  },
  LoginScreen:{
    screen:LoginScreen
  },

},

 {
    initialRouteName: 'Header',
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
 
  body: {
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

