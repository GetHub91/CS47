import React from 'react';
import { StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'
import APIRequest from '../Config/APIRequest'
import News from '../Components/News'
import Search from '../Components/Search'


export default class App extends React.Component {

  static navigationOptions = { header: null }

  state = {
    loading: false,
    articles : [{title: 'title', data: []}],
    searchText: '',
    category: '',
  }

  componentDidMount() {
    this.loadArticles();
    this.searchArticles = this.searchArticles.bind(this)
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
  
  // Handle search bar events
  async searchArticles(searchTerm) {
    this.setState({articles:[], loading: true})
    console.log("searchTerm " + searchTerm)

    var resultArticles = []
    resultArticles = await APIRequest.requestSearchPosts(searchTerm);

    this.setState({loading: false, articles: resultArticles})
  }

  // Refresh gesture == loadArticles
  refresh = () => {
    this.loadArticles()
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
          navigation={this.props.navigation}
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
