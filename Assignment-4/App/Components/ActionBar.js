import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../Themes';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class ActionBar extends React.Component {
  constructor(props) {
    super(props)
  }

  rewind = () => {
    this.props.previousProfile()
  }

  nope = () => {
    this.props.newProfile()
  }

  boost = () => {
    Alert.alert("You've used a boost!\nLove is coming your way!!\n:)")
  }

  like = () => {
    this.props.newProfile()
  }

  superLike = () => {
    this.props.newProfile()
  }

  render() {
    return (
      <View style={styles.actionBar}>
          <TouchableOpacity style={styles.smallImageWrapper} onPress={this.rewind}>
            <FontAwesome
              name="undo"
              style={{fontSize: 18}}
              color="gold"
            />
            <MaterialCommunityIcons
              name="face-profile"
              size={18}
              color="gold"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigImageWrapper} onPress={this.nope}>
            <FontAwesome
              name="close"
              style={{fontSize: 40}}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallImageWrapper} onPress={this.boost}>
            <MaterialCommunityIcons
              name="weather-lightning"
              size={22}
              color="purple"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigImageWrapper} onPress={this.like}>
            <FontAwesome
              name="heart"
              style={{fontSize: 30}}
              color="mediumspringgreen"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallImageWrapper} onPress={this.superLike}>
            <FontAwesome
              name="star"
              style={{fontSize: 22}}
              color="deepskyblue"
            />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionBar: {
    width: '75%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20
  },
  bigImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25
  },
  smallImage: {
    width: 22,
    height: 22
  },
  bigImage: {
    width: 25,
    height: 25
  }
});
