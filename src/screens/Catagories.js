import React from 'react';
import {ScrollView, Image, Text, View} from 'react-native';

// import Header from '../components/Header';

const Product = () => {
  return (
    <ScrollView>
      {/* <Header heading="Product" /> */}
      <Image
        style={{height: 400}}
        source={{
          uri: 'https://www.coxandcox.co.uk/media/catalog/product/a/w/aw20-1228542-supplier-lifestyle.png',
        }}
      />
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000', fontSize: 30}}>Chair</Text>
          <Text>$25</Text>
        </View>
        <Text>
          Do nulla cillum esse sint cillum exercitation cillum irure magna
          Lorem. Culpa aute magna et laborum deserunt qui adipisicing
          adipisicing nisi do Lorem sunt. Voluptate aute irure laborum et esse
          ex tempor sint in cupidatat nulla elit eu. Officia cupidatat sunt
          proident aliquip culpa ex mollit.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Product;
