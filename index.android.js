/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,StatusBar} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults'
import Colors from './colors'

export const BasicApp = StackNavigator({
  PropertyFinder: {
     screen: SearchPage ,
     navigationOptions: ({navigation}) => ({
     //title: `${this}'s Profile'`,
     title: 'Property Finder',
     headerStyle:{ backgroundColor: Colors.primaryColor },
     headerTintColor: 'white',
     }),
  },
  Results: {
    screen: SearchResults ,
    navigationOptions: ({navigation}) => ({
    title: `${navigation.state.params.titleOfPage}`,
    }),
  }
});

export default class PropertyFinder extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <View style = { {flex:1} } >
        <StatusBar
          backgroundColor = {Colors.colorPrimaryDark}
          barStyle="light-content"
          />
        <BasicApp/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.textGrey,
    marginTop: 65,
  },
  container: {
  flex: 1,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
