import React, {useState, useEffect} from 'react';
import {View, ImageBackground, Text, ScrollView, Pressable} from 'react-native';

import styles from '../styles';
import Svg, {Path} from 'react-native-svg';

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
    <ScrollView horizontal={true} style={{margin: 30}}>
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
            {'\ue318'} {x.product_category_name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
});

export const Products = observer(({route, id, navigation}) => {
  const {
    state: {products, category},
    getProductsByCategories,
  } = ProductStore;

  // const [prod, setprod] = useState([{product_name: 'huzaifa'}]);

  useEffect(() => {
    category && getProductsByCategories(category);
  }, [category]);

  return (
    <ScrollView style={{margin: 30}}>
      {products.map((x, i) => (
        <Item2 key={i} item={x} navigation={navigation} />
      ))}
    </ScrollView>
  );
});

const Item2 = ({item, navigation}) => {
  const [count, setCount] = useState(0);
  const [data_, setData_] = useState([{}]);
  React.useEffect(() => {
    if (count > 1) {
      setData_({
        product_id: item.product_id,
        product_name: item.product_name,
        product_price: item.product_price,
        product_qty: count,
        product_image: item.product_image,
      });
    }
  }, [count]);
  return (
    <ImageBackground
      source={{
        uri: item.product_image,
      }}
      resizeMode="cover"
      style={styles.product}
      imageStyle={{borderRadius: 10}}>
      <View
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() => setCount(count + 1)}>
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="black"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </Svg>
        </Pressable>
        <Text style={{color: 'black', fontSize: 20, marginHorizontal: 10}}>
          {count}
        </Text>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() => (count > 0 ? setCount(count - 1) : count)}>
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="black"
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </Svg>
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          try {
            console.log(Object.keys(route.params));
            if (Object.keys(route.params).length == 2) {
              navigation.navigate('Cart', {parama: data_, auth: true});
            } else {
              navigation.navigate('Cart', {parama: data_});
            }
          } catch (err) {
            navigation.navigate('Cart', {parama: data_});
          }
        }}>
        <View
          style={{
            margin: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text style={{color: 'black', fontSize: 24}}>
              {item.product_name}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginBottom: 3,
                marginLeft: 5,
                fontStyle: 'italic',
              }}>
              - PKR {item.product_price}
            </Text>
          </View>
          <Text style={{color: 'black'}}>{item.product_description}</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
};
