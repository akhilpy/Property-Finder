/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults'

const BasicApp = StackNavigator({
  PropertyFinder: {
     screen: SearchPage ,
     navigationOptions: ({navigation}) => ({
     //title: `${this}'s Profile'`,
     title: 'Property Finder',
     headerStyle:{ backgroundColor: '#12AAEE' , shadowColor: '#FFF'},
     headerTintColor: 'white',
     }),
  },
  Results: {
    screen: SearchResults ,
    navigationOptions: ({navigation}) => ({
    title: `${navigation.state.params.titleOfPage}`,
    //title: 'Results'
    }),
  }
});

export default class PropertyFinder extends Component {

  constructor(props){
    super(props);

  }
  render() {
    return <BasicApp name = 'Arnab'/>;
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
  flex: 1,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
