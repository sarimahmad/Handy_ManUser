/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
import IntroScreen from '../Screens/IntroScreen';
import SignUp from '../Screens/SignUp';
import Verify from '../Screens/Verify';
import Home from '../Screens/Home';
import Booking from '../Screens/Booking';
import Support from '../Screens/Support';
import More from '../Screens/More';
import {APP} from '../helper/Color';
import {SCREEN} from '../helper/Constant';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 90},
        headerShown: false,
      }}
      tabBarOptions={{
        // showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: APP.light,
          position: 'absolute',
          height: 50,
          borderTopWidth: 0,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          overflow: 'visible',
        },
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  alignSelf: 'flex-start',
                  width: SCREEN.width / 4,
                  height: '100%',
                  backgroundColor: APP.light,
                  overflow: 'visible',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/home_select_tab.png')
                      : require('../assets/home_Un_select_tab.png')
                  }
                  style={{height: 47, width: 35, resizeMode: 'contain'}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  alignSelf: 'flex-start',
                  width: SCREEN.width / 4,
                  height: '100%',
                  backgroundColor: APP.light,
                  overflow: 'visible',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/booking_select.png')
                      : require('../assets/booking_un_select.png')
                  }
                  style={{height: 47, width: 35, resizeMode: 'contain'}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  alignSelf: 'flex-start',
                  width: SCREEN.width / 4,
                  height: '100%',
                  backgroundColor: APP.light,
                  overflow: 'visible',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/support_select.png')
                      : require('../assets/support_un_select.png')
                  }
                  style={{height: 47, width: 35, resizeMode: 'contain'}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  alignSelf: 'flex-start',
                  width: SCREEN.width / 4,
                  height: '100%',
                  backgroundColor: APP.light,
                  overflow: 'visible',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    focused
                      ? require('../assets/more_select.png')
                      : require('../assets/more_un_select.png')
                  }
                  style={{height: 47, width: 35, resizeMode: 'contain'}}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="HomeTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
