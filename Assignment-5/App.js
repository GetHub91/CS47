/*
*
* Assignment 5
*
* CS47
* Nov, 2018
*/
import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, AsyncStorage, Alert, ActivityIndicator } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes'
import OnboardScreen from './App/Components/OnboardScreen'
import AppNavigation from './App/Navigation/AppNavigation';


export default class App extends React.Component {

  state = {
    termsAccepted: false,
    loading: true
  }

  componentDidMount() {
    this.checkTerms()
  }

  // Bypass Onboarding Screen only if Terms and Conditions have been accepted
  async checkTerms() {
    try {
      // onboard = null  // Useful for debugging onboarding screen
      onboard = await AsyncStorage.getItem('TermsAccepted');
      if (onboard != null) {
        this.setState({termsAccepted: true})
      }
      this.setState({loading: false})
    } catch(error) {
      console.log(error)
      Alert.alert("Error accepting terms and conditions.")
    }
  }

  // Handle button for accepting Terms and Conditions
  onboard = async() => {
    try {
      this.setState({termsAccepted: true})
      await AsyncStorage.setItem('TermsAccepted', JSON.stringify(this.state.termsAccepted));
    } catch(error) {
      console.log(error)
      Alert.alert("Error accepting terms and conditions.")
    }
  }

  render() {
    if (this.state.loading == true){
      // Show loading indicator while waiting for AsyncStorage
      return (
        <SafeAreaView style={styles.container}>
          <Image 
            style={styles.logo} 
            source={Images.logo} 
            resizeMode='contain'
          />
          <ActivityIndicator />
        </SafeAreaView>
      )
    } else if (!this.state.termsAccepted) {
      // Conditional rendering for onboarding screen
      return (
        <SafeAreaView style={styles.container}>
          <Image 
            style={styles.logo} 
            source={Images.logo} 
            resizeMode='contain'
          />
          <OnboardScreen acceptTerms={this.onboard} />
        </SafeAreaView>
      )
    }

    // Terms and Conditions have been accepted
    return (
      <View style={styles.container}>
        <AppNavigation />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'stretch',
    width: undefined,
    height: 100
  },
});
