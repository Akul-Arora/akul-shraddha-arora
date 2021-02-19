import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' ;
import Transaction from './Screens/Booktransactionscreen';
import Search from './Screens/Searchscreen';


export default class Wili extends React.Component{
  render(){
    return(
<Appcontainer/>

    )
  }
}
const Tabnavigator=createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})


const Appcontainer=createAppContainer(Tabnavigator);