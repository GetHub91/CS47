import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, ActivityIndicator, WebView, Image, View } from 'react-native'
import { Images, Metrics, Colors } from '../Themes'


export default class Article extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerTitle:  <View style={styles.container}>
                      <Image 
                        style={styles.logo} 
                        source={Images.logo} 
                        resizeMode='contain'
                      />
                    </View>
    }
  }
  
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params}}
        style={styles.container}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Metrics.screenWidth,
  },
  logo: {
    alignSelf: 'stretch',
    width: undefined,
    height: 100
  },
});
