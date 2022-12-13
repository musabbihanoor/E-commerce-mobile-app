import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';

import Svg, {Path} from 'react-native-svg';

import {observer} from 'mobx-react';
import {ProductStore} from '../store/product';

const {width: screenWidth} = Dimensions.get('window');

export const Products = observer(({navigation}) => {
  const {
    state: {products, category},
    getProductsByCategories,
    getProducts,
    setProduct,
  } = ProductStore;

  const carouselRef = useRef(null);

  useEffect(() => {
    category ? getProductsByCategories(category) : getProducts();
  }, [category]);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const renderItem = ({item}, parallaxProps) => {
    var liked = false;

    return (
      <Pressable
        onPress={() => {
          setProduct(item);
          navigation.navigate('Product');
        }}
        style={styles.item}>
        <ParallaxImage
          source={{uri: item.product_image}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />

        <View style={styles.details}>
          <View>
            {/* {liked ? (
            <Pressable style={{while: 20, height: 20}}>
              <Svg height="100%" width="100%" viewBox="0 0 512 512">
                <Path
                  fill="red"
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </Svg>
            </Pressable>
          ) : (
            <Pressable style={{while: 20, height: 20}}>
              <Svg height="100%" width="100%" viewBox="0 0 512 512">
                <Path
                  fill="white"
                  d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                />
              </Svg>
            </Pressable>
          )} */}
            <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>
              {item.product_description}
            </Text>
            <Text style={{fontSize: 35, color: '#fff', fontWeight: '700'}}>
              {item.product_name}
            </Text>
          </View>

          <View
            style={{
              alignSelf: 'flex-end',
              backgroundColor: '#eee',
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 3,
            }}>
            <Text style={{fontSize: 16}}>{item.product_price} PKR</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={products}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  details: {
    position: 'absolute',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    padding: 20,
  },
});
