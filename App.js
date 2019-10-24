import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


import HomeScreen from './pages/home';
import AboutScreen from './pages/about';
import LoginScreen from './pages/login';
import Messages from './pages/messages';



// Switch Navigator
const AuthNavigator = createSwitchNavigator(
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login'
  }
);

// Tab Navigator
const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: AboutScreen },
    Messages: { screen: Messages },

  },
  {
    initialRouteName: 'Home',

  }
)

const image = require('./assets/logout.png')

// app entry point
export default createAppContainer(
  createStackNavigator(

    

    {
      Auth: {
        screen: AuthNavigator,
        navigationOptions: {
          title: 'Mini Instagram',
        },
      },

      App: {
        screen: HomeNavigator,
        navigationOptions: {
          title: "Welcome",
          headerBackTitle: 'Log out',
          headerBackImage: <Image style={{marginLeft:5, height:22, width: 22}} source={require('./assets/logout.png')} />,
        },
      }


    },


    {
      initialRouteName: 'Auth', // which screen / navigations stack to begin with 
      transitionConfig: () => fromLeft(), 

      headerBackTitleVisible: true,
      defaultNavigationOptions: {
        gesturesEnabled: false,
        headerBackTitle: " Log out",

      }
    }
  )
);

