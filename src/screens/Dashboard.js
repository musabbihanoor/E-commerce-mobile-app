import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import {Header} from '../components/Header';
// import Products from '../components/Products';
import {Categories} from '../components/Categories';
import {Products} from '../components/Products';

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Header heading="" navigation={navigation} />
      <View style={{marginLeft: 20}}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 24,
            color: '#21282F',
            fontFamily: 'Poppins',
          }}>
          Categories
        </Text>
        <Categories />
      </View>
      <ScrollView>
        <Products navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
