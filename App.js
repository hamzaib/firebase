import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HomeScreen from './pages/home';
import Message from './pages/messages';
import AboutScreen from './pages/about';


const tabNavigator = createBottomTabNavigator({
 
  Home: HomeScreen,
  About: AboutScreen,
  Message: Message
})


export default createAppContainer(tabNavigator)