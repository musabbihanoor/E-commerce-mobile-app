import {View, Text} from 'react-native';
import React from 'react';
import {Categories} from '../components/Categories';
import {ProductGrid} from '../components/ProductGrid';

export const Category = ({navigation}) => {
  return (
    <View>
      <View>
        <Categories />
      </View>

      <ProductGrid byCategory={true} navigation={navigation} />
    </View>
  );
};
