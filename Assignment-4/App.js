import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Ionicons } from '@expo/vector-icons';
import TopBar from './App/Components/TopBar';
import ProfileCard from './App/Components/MainView';
import ActionBar from './App/Components/ActionBar';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profile: haroldProfile,
      previousProfile: haroldProfile,
      loading: false,
    };
  }

  /*
   * Show a new profile when like or nope buttons are pressed
   */
  randomProfile = () => {
    this.getNewProfile()
  }
  async getNewProfile() {
    try {
      let previousProfile = this.state.profile
      let newProfile = {}

      this.setState({loading: true});

      // Ensure same profile doesn't appear twice
      do {
        newProfile = await Profiles.random()
      } while (newProfile == previousProfile)

      this.setState({loading: false, profile: newProfile, previousProfile: previousProfile})

    } catch(error) {
      console.log(error)
    }
  }

  /*
   * Show the previous profile when rewind button is pressed
   */
  showPreviousProfile = () => {
    this.getPreviousProfile()
  }
  async getPreviousProfile() {
    try {
      let previousProfile = this.state.previousProfile
      let currentProfile = this.state.profile

      this.setState({loading: true});

      if (currentProfile != previousProfile) {
        this.setState({loading: false, profile: previousProfile, previousProfile: previousProfile})
      } else {
        this.setState({loading: false, profile: currentProfile, previousProfile: previousProfile})
      }

    } catch(error) {
      console.log(error)
    }
  }

  /*
   * Render the three components: nav bar, profile, and buttons
   */
  render() {
    // Conditional rendering
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <TopBar/>
        <ProfileCard 
          profile={this.state.profile}
          newProfile={this.randomProfile} 
          previousProfile={this.showPreviousProfile}
        />
        <ActionBar
          newProfile={this.randomProfile} 
          previousProfile={this.showPreviousProfile} 
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
