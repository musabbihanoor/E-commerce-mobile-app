import React, {useState, useEffect} from 'react';
import {View, ImageBackground, Text, ScrollView, Pressable} from 'react-native';

import styles from '../styles';

import {observer} from 'mobx-react';
import {ProductStore} from '../store/product';

export const Categories = observer(() => {
  const {
    state: {categories, category},
    setCategory,
    getCategories,
  } = ProductStore;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ScrollView horizontal={true} style={{marginVertical: 20}}>
      <Pressable style={styles.category} onPress={() => setCategory(null)}>
        <Text
          style={
            category === null
              ? styles.categoryTextSelected
              : styles.categoryText
          }>
          All
        </Text>
      </Pressable>
      {categories.map((x, i) => (
        <Pressable
          style={styles.category}
          key={i}
          onPress={() => setCategory(x.product_category_id)}>
          <Text
            style={
              category && category === x.product_category_id
                ? styles.categoryTextSelected
                : styles.categoryText
            }>
            {x.product_category_name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
});
