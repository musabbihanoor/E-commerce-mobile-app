import React from 'react';
import {View, Text, Image} from 'react-native';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {Product} from '../screens/Product';
import {Cart} from '../screens/Cart';
import {Wishlist} from '../screens/Wishlist';
import Tutorial from '../screens/Onboarding';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser, faHeart} from '@fortawesome/free-solid-svg-icons';

import {
  faUser as faUserEmpty,
  faHeart as faHeartEmpty,
} from '@fortawesome/free-regular-svg-icons';

import {AuthStore} from '../store/auth';
import {observer} from 'mobx-react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </HomeStack.Navigator>
  );
};

const CartTabs = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Wishlist">
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Product" component={Product} />
    </CartStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <FontAwesomeIcon icon={faHome} />
              ) : (
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/icons/home.png')}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={CartTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={focused ? faHeart : faHeartEmpty} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={focused ? faUser : faUserEmpty} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator = observer(() => {
  const {
    state: {isAuthenticated},
  } = AuthStore;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Tutorial} />
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
