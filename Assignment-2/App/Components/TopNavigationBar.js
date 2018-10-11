import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Images, Metrics } from '../Themes';

export default class TopNavigationBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.navbar}>

        <TouchableOpacity>
          <Image style={styles.icon} source={Images.settings} />
        </TouchableOpacity>

        <Image style={styles.logo} source={Images.logo} />

        <TouchableOpacity style={styles.settings}>
          <Image style={styles.icon} source={Images.chat} />
        </TouchableOpacity>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  navbar: {
    flex: -1,
    minHeight: Metrics.navBarHeight,
    flexDirection: 'row',
    marginTop: Metrics.baseMargin * 2,
    paddingHorizontal: '5%',
    width: Metrics.screenWidth,
    justifyContent: 'space-between',
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: Metrics.borderWidth,
  },
  logo: {
    height: Metrics.images.logoHeight,
    width: Metrics.images.logoWidth,
  },
  icon: {
    height: Metrics.icons.settings,
    width: Metrics.icons.settings,
    tintColor: '#C5C5C5',
  }
});
