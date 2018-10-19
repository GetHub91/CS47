/*
*
* Assignment 3
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'

export default class App extends React.Component {

  state = {
    loading: false,
    articles : [{title: 'title', data: []}],
    searchText: '',
    category: ''
  }

  componentDidMount() {

    // uncomment this to run an API query!
    this.loadArticles();
    this.searchArticles = this.searchArticles.bind(this)
  }

  refresh = () => {
    this.loadArticles()
  }

  async searchArticles(searchTerm) {
    this.setState({articles:[], loading: true})
    console.log("searchTerm " + searchTerm)

    var resultArticles = []
    resultArticles = await APIRequest.requestSearchPosts(searchTerm);

    this.setState({loading: false, articles: resultArticles})
  }

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


  render() {
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
