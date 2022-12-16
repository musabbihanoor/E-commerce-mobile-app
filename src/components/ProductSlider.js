import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles';

import {ProductStore} from '../store/product';

export const ProductSlider = ({navigation}) => {
  const {setProduct, getRandomProducts} = ProductStore;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getRandomProducts());
  }, []);

  return (
    <ScrollView horizontal={true} style={styles.productSlider}>
      {data.map((x, i) => (
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
    </ScrollView>
  );
};
