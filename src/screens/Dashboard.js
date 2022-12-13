import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from '../components/Header';
// import Products from '../components/Products';
import {Categories, Products} from '../components/Categories';
import MyCarousel from '../components/Carousel';

const Dashboard = ({route, navigation}) => {
  return (
    <View>
      <Header heading="" navigation={navigation} />
      <ScrollView>
        <Categories />

        <MyCarousel />

        <Products />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
