import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class MainView extends React.Component {

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.card}>
          <Image source={this.props.profileImage} style={styles.profileImage}/>
          <View style={styles.nameAndAge}>
            <Text style={styles.name}>
              {this.props.name + ", "}
            </Text>
            <Text style={styles.age}>
              {this.props.age}
            </Text>
          </View>
          <Text style={styles.occupation}>
            {this.props.occupation}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 0.9 * width,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#A5A5A5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: 0.9 * width,
    borderTopLeftRadius: 10
  },
  nameAndAge: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  occupation: {
    marginLeft: 16,
    marginBottom: 8,
    fontSize: 16,
    color: '#A5A5A5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  age: {
    fontSize: 24,
  },
});
