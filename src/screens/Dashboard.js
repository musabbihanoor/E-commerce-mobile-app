import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import Products from '../components/Products';

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Header heading="Dashboard" navigation={navigation} />

      <Products />
    </View>
  );
};

export default Dashboard;
