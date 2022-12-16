import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {ProductStore} from '../store/product';
import styles from '../styles';

const ProductGrid = ({searchText, navigation}) => {
  const {
    state: {allProducts},
    setProduct,
  } = ProductStore;

  const [filteredData, setFilteredData] = useState([]);

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
    setFilteredData(
      shuffle(
        allProducts.filter(x =>
          x.name.toLowerCase().includes(searchText.toLowerCase()),
        ),
      ),
    );
  }, [allProducts]);

  return (
    <View>
      <Text style={styles.searchText}>
        {filteredData.length === 0 && 'no'} search results for "{searchText}"
      </Text>
      <View style={styles.productGrid}>
        {filteredData.map((x, i) => (
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
};

export default ProductGrid;
