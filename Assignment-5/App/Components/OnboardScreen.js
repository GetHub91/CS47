import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native'
import { WebBrowser } from 'expo'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

import TermsAndConditions from './TermsAndConditions'

export default class OnboardScreen extends Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.terms}>
          <TermsAndConditions />
        </ScrollView>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.acceptTerms()}
        >
          <Text>I Agree to the Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin,
    width: Metrics.screenWidth - Metrics.baseMargin,
  },
  button: {
    backgroundColor: '#b1d3e5',
    borderRadius: Metrics.baseMargin,
    padding: Metrics.doubleBaseMargin,
  },
  terms: {
    maxHeight: '75%',
    borderColor: 'black',
    borderWidth: 1,
    padding: Metrics.baseMargin/2,
    margin: Metrics.baseMargin
  }
});
