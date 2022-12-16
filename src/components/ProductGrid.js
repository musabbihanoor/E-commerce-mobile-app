import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {ProductStore} from '../store/product';
import styles from '../styles';
import {observer} from 'mobx-react';

export const ProductGrid = observer(({searchText, navigation}) => {
  const {
    state: {searchedProducts},
    setProduct,
    getSearchedProducts,
  } = ProductStore;

  useEffect(() => {
    getSearchedProducts(searchText);
  }, []);

  return (
    <View>
      <Text style={styles.searchText}>
        {searchedProducts.length === 0 && 'no'} search results for "{searchText}
        "
      </Text>
      <View style={styles.productGrid}>
        {searchedProducts.map((x, i) => (
          <Pressable
            onPress={() => {
              setProduct(x);
              navigation.navigate('Product');
            }}
            key={i}
            style={styles.sliderItem}>
            <Image style={styles.sliderImg} source={{uri: x.imgs[0]}} />
            <Text style={styles.sliderText}>{x.name}</Text>
            <Text style={styles.sliderPrice}>${x.price}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
});
