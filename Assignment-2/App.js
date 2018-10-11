import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images, Profiles, Metrics } from './App/Themes';
import BottomButtonBar from './App/Components/BottomButtonBar'
import ProfileCard from './App/Components/ProfileCard'
import TopNavigationBar from './App/Components/TopNavigationBar'

export default class App extends React.Component {
  constructor() {
    super();

    var harpreviousProfile = Profiles.harold;
    this.state = {
      profile: harpreviousProfile,
      previousProfile: {},
      loading: false,
    };
  }

  /*
   * Show a new profile when like or nope buttons are pressed
   */
  showNewProfile = () => {
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
      <View style={styles.container}>
        <TopNavigationBar />
        <ProfileCard profile={this.state.profile} />
        <BottomButtonBar 
          newProfile={this.showNewProfile} 
          previousProfile={this.showPreviousProfile} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
