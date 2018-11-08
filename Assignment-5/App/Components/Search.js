import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'


export default class Search extends Component {

	constructor(props) {
		super(props)

		this.state = {
			input: '',
			category: ''
		}
	}

  render () {
    return (
      <View style={styles.searchbar}>
        <TextInput 
        	style={styles.inputText}
          placeholder="Search for News"
          onChangeText={(text) => {
            this.setState({input: text, category: ''})
          }}
          ref={input => {this.textInput = input }}
          onSubmitEditing={() => {
            this.textInput.clear()
            this.props.search(this.state.input)
          }}
        />
        <TouchableOpacity 
          onPress={() => {
            this.textInput.clear()
            this.props.search(this.state.input)
          }}
        >
	        <FontAwesome
		        name="search"
		        size={Metrics.icons.medium}
	        />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  searchbar: {
  	flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    backgroundColor: '#e5e5e5',
    margin: Metrics.baseMargin,
    height: 50,
    borderRadius: 15,
  },
  inputText: {
  	height: '100%',
  	width: Metrics.screenWidth * .8,
  }
});
