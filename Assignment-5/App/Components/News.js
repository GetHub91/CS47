import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  constructor(props) {
    super(props)
  }

  articleRenderer(item) {
    return (
      <TouchableOpacity onPress={() => this.pressArticle(item.url)}>
        <Text style={material.title}>{item.title}</Text>
        <Text style={material.body1}>{item.snippet}</Text>
        <Text style={material.body2}>{item.byline}</Text>
        <Text style={material.caption}>{item.date}</Text>
      </TouchableOpacity>
    )
  }

  pressArticle = async (url) => {
    console.log("url  " + url);
    WebBrowser.openBrowserAsync(url);
  }

  _keyExtractor = (item, index) => index.toString();


  render () {
    // Conditional rendering
    if(this.props.loading) {
      return (
        <View style={styles.searchbar}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.articles}
          // onEndReached={() => this.loadMore(3}
          renderItem={({item}) => this.articleRenderer(item)}
          ItemSeparatorComponent = {() => (<View style={{height: 10}}/>)}
          keyExtractor={this._keyExtractor}
          refreshing = {this.props.loading}
          onRefresh = {() => this.props.refresh()}
          // refreshing = {this.state.refreshing}
          // removeClippedSubviews = {true}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin,
    width: Metrics.screenWidth - Metrics.baseMargin,
  },
});
