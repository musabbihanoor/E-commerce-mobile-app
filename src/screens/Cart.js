import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {ProductStore} from '../store/product';
import {AuthStore} from '../store/auth';
import {observer} from 'mobx-react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';

import {Header} from '../components/Header';
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
      {/* <View style={styles.header}>
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
      </View> */}

      <Header />

      {cart.length > 0 ? (
        <ScrollView>
          {cart.map((x, i) => (
            <Item key={i} item={x} navigation={navigation} />
          ))}
        </ScrollView>
      ) : (
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            fontSize: 16,
          }}>
          Cart is empty
        </Text>
      )}

      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          padding: 15,
          width: 200,
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 50,
          marginBottom: 20,
        }}>
        <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
          Confirm Order
        </Text>
      </TouchableOpacity>
    </View>
  );
});

const Item = ({item: {product, quantity}, navigation}) => {
  const {updateCartQuantity, setProduct} = ProductStore;

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
      <Pressable
        onPress={() => {
          setProduct(product);
          navigation.navigate('Product');
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 5}}
          source={{
            uri: product.imgs[0],
          }}
        />
      </Pressable>
      <View style={{flex: 1}}>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 16,
            color: '#000',
            fontFamily: 'Poppins-SemiBold',
          }}>
          {product.name}
        </Text>

        <Text
          style={{
            marginLeft: 5,
            fontSize: 14,
            color: '#000',
            fontFamily: 'Poppins-Regular',
          }}>
          {product.price * quantity ? product.price * quantity : ''} PKR
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 30,
          borderColor: '#eee',
          borderWidth: 1,
        }}>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() => {
            updateCartQuantity(product.id, quantity + 1);
          }}>
          <FontAwesomeIcon icon={faPlus} />
        </Pressable>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginTop: -5,
            marginHorizontal: 10,
          }}>
          {quantity}
        </Text>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() => {
            updateCartQuantity(product.id, quantity - 1);
          }}>
          {quantity === 1 ? (
            <FontAwesomeIcon color="red" icon={faTrashCan} />
          ) : (
            <FontAwesomeIcon icon={faMinus} />
          )}
        </Pressable>
      </View>
    </View>
  );
};
