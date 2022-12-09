import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';

import Heading from '../components/Header';

const Cart = () => {
  return (
    <View>
      <Heading heading="Cart" hideCart={true} />

      <ScrollView>
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </View>
  );
};

export default Cart;

const Item = () => {
  return (
    <View
      style={{
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
      }}>
      <Image
        style={{width: 50, height: 50, borderRadius: 5}}
        source={{
          uri: 'https://www.coxandcox.co.uk/media/catalog/product/a/w/aw20-1228542-supplier-lifestyle.png',
        }}
      />

      <Text style={{flex: 1, marginLeft: 5, fontSize: 20, color: '#000'}}>
        Chair
      </Text>
      <View>
        <Text>Quantity: 1</Text>
        <Text>Total: $25</Text>
      </View>
    </View>
  );
};
