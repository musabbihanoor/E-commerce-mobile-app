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
import {observer} from 'mobx-react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';

import {Header} from '../components/Header';
import styles from '../styles';

export const Cart = observer(({navigation}) => {
  const {
    state: {cart},
  } = ProductStore;

  return (
    <View style={{flex: 1}}>
      {/* <Header heading="Cart" navigation={navigation} /> */}

      {cart.length > 0 ? (
        <>
          <ScrollView>
            {cart.map((x, i) => (
              <Item key={i} item={x} navigation={navigation} />
            ))}
            <View style={{height: 80}}></View>
          </ScrollView>

          <TouchableOpacity
            style={{...styles.primaryBtn, bottom: 0, position: 'absolute'}}>
            <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
              Confirm Order
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{justifyContent: 'center', flex: 1}}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginBottom: 20,
            }}
            source={require('../../assets/icons/empty-cart.png')}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              fontSize: 26,
              color: '#000',
            }}>
            Your Cart is Empty
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              fontSize: 12,
              color: '#000',
            }}>
            Your shopping bag has abandonment issues
          </Text>
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Continue shopping
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});

const Item = ({item: {product, quantity}, navigation}) => {
  const {updateCartQuantity, setProduct} = ProductStore;

  return (
    <View style={styles.cartItem}>
      <Pressable
        onPress={() => {
          setProduct(product);
          navigation.navigate('Product');
        }}>
        <Image
          style={{width: 100, height: 150, borderRadius: 5}}
          source={{
            uri: product.imgs[0],
          }}
        />
      </Pressable>
      <View style={{flex: 1}}>
        <Text style={styles.cartName}>{product.name}</Text>

        <Text style={styles.cartPrice}>
          ${product.price * quantity ? product.price * quantity : ''}
        </Text>
      </View>

      <View style={styles.cartQuantity}>
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
