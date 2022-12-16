import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as faHeartFilled,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import {ProductStore} from '../store/product';
import {observer} from 'mobx-react';
import styles from '../styles';

const {width: screenWidth} = Dimensions.get('window');

export const Product = observer(() => {
  const {
    state: {product, wishlist},
    addToCart,
    addToWishlist,
  } = ProductStore;

  const [activeSlide, setActiveSlide] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(wishlist.find(x => x.id === product.id));
  }, [wishlist]);

  const renderItem = ({item}) => {
    return (
      <Image
        style={{height: 400, borderBottomLeftRadius: 50}}
        source={{
          uri: item,
        }}
      />
    );
  };

  const PaginationView = () => {
    return (
      <Pagination
        dotsLength={product.imgs.length}
        activeDotIndex={activeSlide}
        containerStyle={{marginTop: -50}}
        dotStyle={{
          width: 30,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View>
      <ScrollView>
        {/* <Header heading="Product" /> */}

        <Carousel
          data={product.imgs}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth}
          layout={'tinder'}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <PaginationView />

        <Pressable
          onPress={() => addToWishlist(product)}
          style={{
            width: 50,
            height: 50,
            padding: 10,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 50,
            top: product.imgs.length > 1 ? -50 : -20,
            left: 280,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesomeIcon
            style={{color: 'red'}}
            icon={liked ? faHeartFilled : faHeart}
          />
        </Pressable>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              marginBottom: 20,
            }}>
            <View>
              <Text
                style={{
                  color: '#000',
                  fontSize: 24,
                  fontFamily: 'Poppins-Regular',
                }}>
                {product.name}
              </Text>
            </View>
            <Text style={{fontFamily: 'Poppins-Light', alignSelf: 'flex-end'}}>
              ${product.price}
            </Text>
          </View>
          <Text style={{fontFamily: 'Poppins-Light', paddingBottom: 100}}>
            {product.description}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.productBtn}
        onPress={() => addToCart(product)}>
        <FontAwesomeIcon
          style={{color: '#fff', marginRight: 10}}
          icon={faCartShopping}
        />
        <Text style={styles.productText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
});
