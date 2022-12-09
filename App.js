import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Product from './src/screens/Product';
import Cart from './src/screens/Cart';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStore} from './src/store/auth';
import {observer} from 'mobx-react';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const App = observer(() => {
  const {
    state: {isAuthenticated},
  } = AuthStore;

  return (
    <>
      {isAuthenticated ? (
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Cart" component={Cart} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
});

// export default App;
