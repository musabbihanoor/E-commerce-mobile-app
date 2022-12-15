import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';

// import Header from '../components/Header';

import {ProductStore} from '../store/product';
import {observer} from 'mobx-react';

import Svg, {Path} from 'react-native-svg';

const {width: screenWidth} = Dimensions.get('window');

export const Product = observer(() => {
  const {
    state: {product},
    addToCart,
  } = ProductStore;

  const [activeSlide, setActiveSlide] = useState(0);

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
        onPress={() => {
          addToCart(product);
        }}
        style={{
          width: 50,
          height: 50,
          padding: 10,
          backgroundColor: '#ccc',
          borderRadius: 50,
          top: -20,
          left: 280,
        }}>
        <Svg height="100%" width="100%" viewBox="0 0 576 512">
          <Path
            fill="#fff"
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </Svg>
      </Pressable>
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
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
          <Text style={{fontFamily: 'Poppins-Light'}}>${product.price}</Text>
        </View>
        <Text style={{fontFamily: 'Poppins-Light'}}>{product.description}</Text>
      </View>
    </ScrollView>
  );
});
