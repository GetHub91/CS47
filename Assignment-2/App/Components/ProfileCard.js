import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Metrics } from '../Themes';

export default class ProfileCard extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={styles.card}>

        <Image style={styles.picture} source={this.props.profile.image}/>
        
        <View style={styles.details}>
          <View style={ {flexDirection: 'row'} }>
            <Text style={styles.name}>{this.props.profile.name}</Text>
            <Text style={styles.age}>, {this.props.profile.age}</Text>
          </View>
          <Text style={styles.occupation}>{this.props.profile.occupation}</Text>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: '15%',
    maxWidth: Metrics.screenWidth * .9,
    backgroundColor: 'white',
    borderWidth: Metrics.borderWidth,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#C5C5C5',
  },
  picture: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  details: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: Metrics.baseMargin,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 24,
  },
  occupation: {
    fontSize: 16,
    color: '#C5C5C5'
  }
});
