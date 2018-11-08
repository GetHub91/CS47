/*
*
* Assignment 5
*
* CS47
* Nov, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, AsyncStorage, Alert } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'
import OnboardScreen from './App/Components/OnboardScreen'

export default class App extends React.Component {

  state = {
    loading: false,
    articles : [{title: 'title', data: []}],
    searchText: '',
    category: '',
    termsAccepted: false
  }

  componentDidMount() {
    this.checkTerms()
    this.loadArticles();
    this.searchArticles = this.searchArticles.bind(this)
  }

  // Bypass Onboarding Screen iff Terms and Conditions have been accepted
  async checkTerms() {
    try {
      onboard = await AsyncStorage.getItem('TermsAccepted');
      if (onboard != null) {
        this.setState({termsAccepted: true})
      }
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

  // Handle search bar events
  async searchArticles(searchTerm) {
    this.setState({articles:[], loading: true})
    console.log("searchTerm " + searchTerm)

    var resultArticles = []
    resultArticles = await APIRequest.requestSearchPosts(searchTerm);

    this.setState({loading: false, articles: resultArticles})
  }

  // Load articles on app open
  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];

    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }

    this.setState({loading: false, articles: resultArticles})
  }

  // Refresh gesture == loadArticles
  refresh = () => {
    this.loadArticles()
  }


  render() {
    // Conditional rendering for Onboarding screen
    if (!this.state.termsAccepted) {
      return (
        <SafeAreaView style={styles.container}>
          <Image 
            style={styles.logo} 
            source={Images.logo} 
            resizeMode='contain'
          />
          <OnboardScreen
            acceptTerms={this.onboard}
          />
        </SafeAreaView>
      )
    }

    // Terms and Conditions have been accepted
    return (
      <SafeAreaView style={styles.container}>
        <Image 
          style={styles.logo} 
          source={Images.logo} 
          resizeMode='contain'
        />
        <Search search={this.searchArticles}/>
        <News
          articles={this.state.articles}
          loading={this.state.loading}
          refresh={this.refresh}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'stretch',
    width: undefined,
    height: 100
  },
});
