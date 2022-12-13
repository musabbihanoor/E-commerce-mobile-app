import React, {useState, useEffect} from 'react';
import {View, ScrollView, Image, Button, Text, Pressable} from 'react-native';

import {ProductStore} from '../store/product';
import {AuthStore} from '../store/auth';
import {observer} from 'mobx-react';

import Svg, {Path} from 'react-native-svg';
import styles from '../styles';

export const Cart = observer(({navigation}) => {
  const {
    state: {cart},
    createOrder,
  } = ProductStore;

  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Pressable
          style={{width: 20, height: 20}}
          onPress={() => navigation.navigate('login')}>
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="#21282F"
              d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z"
            />
          </Svg>
        </Pressable>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <ScrollView>
        {cart.map((x, i) => (
          <Item key={i} item={x} navigation={navigation} />
        ))}
      </ScrollView>
      <Button
        style={{bottom: '0'}}
        title="Create Order"
        onPress={() =>
          AuthStore.state.isAuthenticated
            ? createOrder()
            : navigation.navigate('login')
        }
      />
    </View>
  );
});

const Item = ({item: {product, quantity}}) => {
  const {updateCartQuantity} = ProductStore;

  return (
    <View
      style={{
        borderColor: '#ccc',
        borderBottomWidth: 1,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius: 5}}
        source={{
          uri: product.product_image,
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 20,
            color: '#000',
            fontWeight: '700',
          }}>
          {product.product_name}
        </Text>

        <Text style={{marginLeft: 5, fontSize: 12, color: '#000'}}>
          {product.product_description}
        </Text>

        <Text
          style={{
            marginLeft: 5,
            fontSize: 14,
            color: '#000',
            fontWeight: '700',
          }}>
          {product.product_price * quantity
            ? product.product_price * quantity
            : ''}{' '}
          PKR
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() => {
            updateCartQuantity(product.product_id, quantity + 1);
          }}>
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="black"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </Svg>
        </Pressable>
        <Text style={{color: 'black', fontSize: 20, marginHorizontal: 10}}>
          {quantity}
        </Text>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() => {
            updateCartQuantity(product.product_id, quantity - 1);
          }}>
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="black"
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </Svg>
        </Pressable>
      </View>
    </View>
  );
};
