import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Screens
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
import IntroScreen from '../Screens/IntroScreen';
import Confirmation from '../Screens/Confirmation';
import Chat from '../Screens/Chat';
import {ORANGE, WHITE} from '../helper/Color';
import CustomBottomBar from '../Navigations/CustomerBottomBar';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: WHITE.btntxtColor,
      }}
      tabBar={props => <CustomBottomBar {...props} />}>
      <BottomTab.Screen
        name="Home"
        component={Confirmation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="More"
        component={Confirmation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="Support"
        component={Confirmation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/Home.png')
                }
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
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
        <Stack.Screen name="Chat" component={Chat} />

        <Stack.Screen name="Confirmation" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
