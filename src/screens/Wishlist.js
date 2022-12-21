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

export const Wishlist = observer(({navigation}) => {
  const {
    state: {wishlist},
  } = ProductStore;

  return (
    <View style={{flex: 1}}>
      {/* <Header heading="Cart" navigation={navigation} /> */}

      {wishlist.length > 0 ? (
        <ScrollView>
          {wishlist.map((x, i) => (
            <Item key={i} product={x} navigation={navigation} />
          ))}
        </ScrollView>
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
            source={require('../../assets/icons/out-of-stock.png')}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              fontSize: 26,
              color: '#000',
            }}>
            Your Wishlist is Empty
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              fontSize: 12,
              color: '#000',
            }}>
            Tap the heart button to start saving your favourite items
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
              Explore
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});

const Item = ({product, navigation}) => {
  const {removeFromWishlist, addToCart, setProduct} = ProductStore;

  return (
    <View style={styles.wishlistItem}>
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
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.wishlistName}>{product.name}</Text>
          <Text style={styles.wishlistPrice}>${product.price}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            addToCart(product);
            removeFromWishlist(product.id);
          }}
          style={{
            backgroundColor: '#000',
            alignItems: 'center',
            borderRadius: 0,
            padding: 10,
            width: 120,
            alignSelf: 'flex-end',
            marginBottom: 0,
          }}>
          <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>

      <Pressable
        onPress={() => removeFromWishlist(product.id)}
        style={{position: 'absolute', right: 0, top: 10}}>
        <FontAwesomeIcon color="red" icon={faTrashCan} />
      </Pressable>
    </View>
  );
};
