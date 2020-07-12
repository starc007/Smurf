//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';

// create a component
class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txt}>Sign Up</Text>
        </View>

        <View style={styles.mid}>
          <Text style={styles.text_footer}>Email or Phone</Text>
          <View style={styles.inputField}>
            <FontAwesome
              name="user-o"
              size={22}
              color={colors.bgMain}
              style={{paddingLeft: 10, paddingTop: 12}}
            />
            <TextInput
              placeholder="Email or Phone"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 10}]}>Password</Text>
          <View style={styles.inputField}>
            <Feather
              name="lock"
              size={22}
              color={colors.bgMain}
              style={{paddingLeft: 10, paddingTop: 12}}
            />
            <TextInput
              placeholder="Your password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry
            />
          </View>
          <Text
            style={{
              fontFamily: 'Gilroy-Light',
              color: colors.slideDarktxt,
              fontSize: 20,
              margin: 20,
            }}>
            Or Signup with
          </Text>
          <View style={styles.lgnOptions}>
            <TouchableOpacity style={styles.lgnBtn}>
              <FontAwesome
                name="google"
                size={30}
                color={colors.txtWhite}
                style={styles.icn}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lgnBtn}>
              <FontAwesome
                name="twitch"
                size={30}
                color={colors.txtWhite}
                style={styles.icn}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lgnBtn}>
              <FontAwesome
                name="steam"
                size={30}
                color={colors.txtWhite}
                style={styles.icn}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Register</Text>
            </TouchableOpacity>
            {/* <View style={{flexDirection: 'row'}}>
              <Text style={styles.fgTxt}>Forgot Password ?</Text>
              <TouchableOpacity style={styles.fgBtn}>
                <Text style={styles.clickMe}>Click here</Text>
              </TouchableOpacity>
            </View> */}
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.fgTxt}>Already have a Account ?</Text>
              <TouchableOpacity
                style={styles.fgBtn}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.clickMe}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 40,
    fontFamily: 'Gilroy-Bold',
    marginTop: 15,
    color: colors.slideDarktxt,
  },
  inputField: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.bgMain,
    width: 350,
    borderRadius: 4,
    marginLeft: 20,
  },
  lgnOptions: {
    //flex: 1,
    flexDirection: 'row',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingLeft: 20,
    color: '#05375a',
    fontSize: 18,
    fontFamily: 'Gilroy-Light',
    width: '100%',
  },
  mid: {
    flex: 6,
  },
  text_footer: {
    color: colors.slideDarktxt,
    fontSize: 22,
    marginLeft: 20,
    fontFamily: 'Gilroy-Light',
  },
  lgnBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.bgMain,
    borderRadius: 4,
    marginLeft: 20,
  },
  btn: {
    width: 350,
    height: 60,
    backgroundColor: colors.bgMain,
    borderRadius: 4,
    margin: 20,
  },
  btnTxt: {
    fontFamily: 'Gilroy-Medium',
    textAlign: 'center',
    color: colors.txtWhite,
    fontSize: 26,
    paddingTop: 12,
  },
  fgTxt: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
    color: colors.lightGray,
  },
  clickMe: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 18,
    color: colors.bgMain,
    marginLeft: 10,
  },
  icnBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.bgMain,
    borderRadius: 4,
    marginLeft: 20,
    marginTop: 70,
  },
  icn: {
    marginLeft: 10,
    marginTop: 10,
  },
});

//make this component available to the app
export default LoginScreen;
