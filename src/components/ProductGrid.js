import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles';

import {ProductStore} from '../store/product';

export const ProductGrid = ({navigation}) => {
  const {
    state: {allProducts},
    setProduct,
  } = ProductStore;

  const [data, setData] = useState([]);

  const shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  useEffect(() => {
    setData(shuffle(allProducts.slice(0, 6)));
  }, [allProducts]);

  return (
    <ScrollView horizontal={true} style={styles.productGrid}>
      {data.map((x, i) => (
        <Pressable
          onPress={() => {
            setProduct(x);
            navigation.navigate('Product');
          }}
          key={i}
          style={styles.gridItem}>
          <Image style={styles.gridImg} source={{uri: x.imgs[0]}} />
          <Text style={styles.gridText}>{x.name}</Text>
          <Text style={styles.gridPrice}>${x.price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};
