import React from 'react';
import { createStackNavigator } from 'react-navigation'
import Newsfeed from '../Screens/Newsfeed'
import Article from '../Screens/Article'


const StackNav = createStackNavigator({
  Newsfeed: { screen: Newsfeed },
  Article:   { screen: Article },
}, {
  initialRouteName: 'Newsfeed',
  navigationOptions: ({navigation}) => {
    let url = 'blank';
    if (navigation.state.params) {
      url = navigation.state.params.url || url;
    }

    return {
      url: url,
    }
  }
})


export default StackNav
