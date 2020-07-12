//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../assets/colors';
// create a component
class SwiperScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Welcome !</Text>
        </View>
        <View style={{flex: 5}}>
          <Swiper
            paginationStyle={{position: 'absolute', marginBottom: 450}}
            autoplay={true}
            autoplayTimeout={2}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}>
            <View>
              <Image
                source={require('../assets/SwiperImage/GameController.png')}
                style={styles.img}
              />
              <Text style={styles.slide}>GHub</Text>
              <Text style={styles.slidetxt}>Social Media for Gamers</Text>
            </View>
            <View>
              <Image
                source={require('../assets/SwiperImage/SearchPeople.png')}
                style={styles.img}
              />
              <Text style={styles.slide}>Search Groups</Text>
              <Text style={styles.slidetxt}>
                Look for group of people to play your favourite game together
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/SwiperImage/CreateTeam.png')}
                style={styles.img}
              />
              <Text style={styles.slide}>Create Teams</Text>
              <Text style={styles.slidetxt}>
                {'     '}
                Create Teams, Participate in competitions and tournaments
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/SwiperImage/GroupChat.png')}
                style={styles.img}
              />
              <Text style={styles.slide}>Communication</Text>
              <Text style={styles.slidetxt}>
                Create group chats, chat with your teammate and friends
              </Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.btntext}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.btntext1}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    textAlign: 'center',
    fontSize: 35,
    color: colors.slideDarktxt,
    fontFamily: 'Gilroy-Bold',
  },
  slidetxt: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.lightGray,
    fontFamily: 'Gilroy-Light',
  },
  img: {
    width: 300,
    height: 300,
    marginLeft: 40,
    marginTop: 40,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 55,
    color: colors.lightGray,
    fontFamily: 'NunitoSans-Bold',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: colors.lightGray,
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: colors.bgMain,
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  btn: {
    width: 150,
    height: 60,
    backgroundColor: colors.bgMain,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    width: 150,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.bgMain,
  },
  btntext: {
    color: colors.txtWhite,
    fontSize: 22,
    fontFamily: 'Gilroy-Light',
  },
  btntext1: {
    color: colors.bgMain,
    fontSize: 22,
    fontFamily: 'Gilroy-Light',
  },
});

//make this component available to the app
export default SwiperScreen;
