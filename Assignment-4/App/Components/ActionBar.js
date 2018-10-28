import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Images } from '../Themes';

export default class ActionBar extends React.Component {

  render() {
    return (
      <View style={styles.actionBar}>
          <View style={styles.smallImageWrapper}>
            <Image source={Images.rewind} resizeMode={'contain'} style={styles.smallImage}/>
          </View>
          <View style={styles.bigImageWrapper}>
            <Image source={Images.nope} resizeMode={'contain'} style={styles.bigImage}/>
          </View>
          <View style={styles.smallImageWrapper}>
            <Image source={Images.boost} resizeMode={'contain'} style={styles.smallImage}/>
          </View>
          <View style={styles.bigImageWrapper}>
            <Image source={Images.like} resizeMode={'contain'} style={styles.bigImage}/>
          </View>
          <View style={styles.smallImageWrapper}>
            <Image source={Images.superLike} resizeMode={'contain'} style={styles.smallImage}/>
          </View>
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
    justifyContent: 'space-between'
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
