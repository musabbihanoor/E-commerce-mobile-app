import React from 'react';
import {View} from 'react-native';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {Product} from '../screens/Product';
import {Cart} from '../screens/Cart';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

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
    </HomeStack.Navigator>
  );
};

const CartTabs = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="cart">
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="Wishlist" component={Product} />
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
          tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faHome} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartTabs}
        options={{
          tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faCartShopping} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faUser} />,
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
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
