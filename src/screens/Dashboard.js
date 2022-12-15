import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

import {Header} from '../components/Header';
// import Products from '../components/Products';
import {Categories} from '../components/Categories';
import {ProductCarousel} from '../components/ProductCarousel';
import {ProductGrid} from '../components/ProductGrid';
import styles from '../styles';

const Dashboard = ({navigation}) => {
  return (
    <ScrollView>
      <Header heading="" navigation={navigation} />
      <Text style={styles.heading}>Explore</Text>
      <Categories />
      <ProductCarousel navigation={navigation} />
      <Text style={styles.heading}>Popular Products</Text>
      <ProductGrid navigation={navigation} />
      <Text style={styles.heading}>Top Picks For You</Text>
      <ProductGrid navigation={navigation} />
    </ScrollView>
  );
};

export default Dashboard;
