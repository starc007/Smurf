//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import colors from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar barStyle="light-content" /> */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/Icons/dragon.png')}
            style={styles.img}
          />

          <TextInput
            placeholder="What's new, Saurabh?"
            style={styles.txtInput}
          />
          <Ionicons
            name="add-circle"
            size={32}
            color="#fff"
            style={styles.icon}
          />
        </View>
        <View style={{flex: 2}} />
        <View style={{flex: 3}} />
      </View>
    );
  }
}
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.gray,
  },
  header: {
    flex: 1,
    backgroundColor: colors.bgMain,
    flexDirection: 'row',
  },
  img: {
    height: 60,
    width: 60,
    borderWidth: 2,
    marginLeft: 30,
    marginTop: 20,
  },
  txtInput: {
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Gilroy-Light',
    height: 50,
    marginTop: 34,
    color: colors.txtWhite,
  },
  icon: {
    marginTop: 40,
    marginLeft: 20,
  },
});

export default HomeScreen;
