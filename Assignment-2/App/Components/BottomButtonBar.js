import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Images, Metrics, Profiles } from '../Themes';

export default class BottomButtonBar extends React.Component {

  constructor(props) {
    super(props);
  }

  boost = () => {
    Alert.alert("You've used a boost!\nLove is coming your way!!\n:)")
  }

  render() {
    return (
      <View style={styles.buttonbar}>

        <TouchableOpacity style={styles.specialButton} onPress={this.props.previousProfile}>
          <Image style={styles.rewind} source={Images.rewind} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={this.props.newProfile}>
          <Image style={styles.nope} source={Images.nope} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.specialButton} onPress={this.boost}>
          <Image style={styles.boost} source={Images.boost} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={this.props.newProfile}>
          <Image style={styles.like} source={Images.like} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.specialButton} onPress={this.props.newProfile}>
          <Image style={styles.star} source={Images.superLike} />
        </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  buttonbar: {
    flex: -1,
    minHeight: Metrics.navBarHeight,
    flexDirection: 'row',
    margin: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * .8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  primaryButton: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Metrics.icons.large,
    width: Metrics.icons.large,
    borderRadius: Metrics.icons.large * 0.5
  },
  specialButton: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Metrics.icons.medium,
    width: Metrics.icons.medium,
    borderRadius: Metrics.icons.medium * 0.5
  },
  rewind: {
    height: Metrics.icons.tiny+2,
    width: Metrics.icons.tiny,
  },
  nope: {
    height: Metrics.icons.small,
    width: Metrics.icons.small,
  },
  boost: {
    height: Metrics.icons.tiny+5,
    width: Metrics.icons.tiny-5,
  },
  like: {
    height: Metrics.icons.small-5,
    width: Metrics.icons.small,
  },
  star: {
    height: Metrics.icons.tiny+5,
    width: Metrics.icons.tiny+5,
  }
});
