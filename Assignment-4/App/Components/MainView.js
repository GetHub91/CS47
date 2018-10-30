import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card } from 'react-native-elements'
import Swiper from 'react-native-deck-swiper';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const {height, width} = Dimensions.get('window');

export default class ProfileCard extends React.Component {
  constructor(props){
    super(props);
  }

  renderProfile = () => {
    return(
      <View style={styles.mainView}>
        <Card 
          containerStyle={styles.card}
          image={this.props.profile.image}
          imageStyle={styles.profileImage}
        >
          <View style={styles.nameAndAge}>
            <Text style={styles.name}>
              {this.props.profile.name + ", "}
            </Text>
            <Text style={styles.age}>
              {this.props.profile.age}
            </Text>
          </View>
          <Text style={styles.occupation}>
            {this.props.profile.occupation}
          </Text>
        </Card>
      </View>
    )
  }

  handleLike = () => {
    this.props.newProfile()
    Alert.alert("Like!")
  }

  handleNope = () => {
    this.props.newProfile()
    Alert.alert("Nope!")
  }

  handleSuperLike = (card) => {
    this.props.newProfile()
    Alert.alert("Super Like!")
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Swiper 
          cards={[this.props.profile]}
          backgroundColor={'#f0f0f0'}
          renderCard={(card) => this.renderProfile()}
          cardIndex={0}
          disableBottomSwipe={true}
          verticalThreshold={height / 3}
          onSwipedLeft={() => this.handleNope()}
          onSwipedRight={() => this.handleLike()}
          onSwipedTop={() => this.handleSuperLike()}
        >
        </Swiper> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderColor: '#f0f0f0',
    shadowOpacity: 0
  },
  card: {
    width: 0.9 * width,
    borderWidth: 0.4,
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
  icon: {
    width: '100%',
    height: '90%',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
