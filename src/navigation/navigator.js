import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {Product} from '../screens/Product';
import {Cart} from '../screens/Cart';
import {Wishlist} from '../screens/Wishlist';
import Tutorial from '../screens/Onboarding';
import {Header} from '../components/Header';
import Menu from '../components/Menu';
import SideMenu from '@chakrahq/react-native-side-menu';
import {Category} from '../screens/Category';

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

const menu = <Menu />;

const HomeTabs = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Category">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Category} />
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
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <SideMenu menu={menu} isOpen={openMenu}>
      <Header setOpenMenu={setOpenMenu} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTabs}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                }}>
                Home
              </Text>
            ),
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
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                }}>
                Wishlist
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon icon={focused ? faHeart : faHeartEmpty} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Cart}
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 10,
                }}>
                Profile
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon icon={focused ? faUser : faUserEmpty} />
            ),
          }}
        />
      </Tab.Navigator>
    </SideMenu>
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
        <Stack.Screen name="Onboarding" component={Tutorial} />
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
