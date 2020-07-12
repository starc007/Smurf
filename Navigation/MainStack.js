//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

//Screens
import HomeScreen from '../screens/TabNav/HomeScreen';
import TeamScreen from '../screens/TabNav/TeamScreen';
import ExploreScreen from '../screens/TabNav/ExploreScreen';
import ChatScreen from '../screens/TabNav/ChatScreen';
import Profile from '../screens/TabNav/Profile';
import colors from '../assets/colors';
import {TouchableOpacity} from 'react-native';

const mainTab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <mainTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.bgMain,
        inactiveTintColor: colors.lightGray,
        style: {
          backgroundColor: 'white',
          height: 60,
          borderRadius: 2,
        },
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            return <AntDesign name="home" size={26} color={color} />;
          } else if (route.name === 'Team') {
            return <MaterialIcons name="group" size={26} color={color} />;
          } else if (route.name === 'Explore') {
            return (
              <View style={styles.btn}>
                <MaterialIcons
                  name="explore"
                  size={28}
                  color={color}
                  style={styles.icon}
                />
              </View>
            );
          } else if (route.name === 'Chat') {
            return <Entypo name="chat" size={26} color={color} />;
          } else if (route.name === 'Profile') {
            return <Feather name="menu" size={26} color={color} />;
          }
        },
      })}>
      <mainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <mainTab.Screen
        name="Team"
        component={TeamScreen}
        options={{tabBarLabel: 'Team'}}
      />
      <mainTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{tabBarLabel: 'Explore'}}
      />
      <mainTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{tabBarLabel: 'Chat'}}
      />
      <mainTab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </mainTab.Navigator>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    backgroundColor: colors.bgMain,
    borderRadius: 4,
    margin: 5,
  },
  icon: {
    margin: 11,
    color: colors.txtWhite,
  },
});
export default MainStack;
