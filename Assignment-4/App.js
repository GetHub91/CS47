import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Ionicons } from '@expo/vector-icons';
import TopBar from './App/Components/TopBar';
import MainView from './App/Components/MainView';
import ActionBar from './App/Components/ActionBar';

export default class App extends React.Component {
  constructor() {
    super();
    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopBar />
        <MainView {...this.state}/>
        <ActionBar/>

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
