import React,{useState} from 'react';
import {View, ScrollView, Image,Button, Text,Pressable} from 'react-native';

import Heading from '../components/Header';
import {AuthStore} from '../store/auth'


const Cart = ({route,navigation}) => {
  state = {
    isAuthenticated: false,
    user: null,
  };

  const [data,setData]=useState([]);
  React.useEffect(() => {
    setData([...data,route.params.parama])
    
  }, [route.params.parama]);
  console.log(Object.keys(route.params))
  const products = () => data.map((x) => [x.product_id,x.product_qty])
  console.log(products())

  const order = async () => {
    fetch('http://10.0.2.2:8000/createorder', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    products: products(),
    
  })
});
}

  return (
    <View>
      <Heading heading="Cart" hideCart={true} />
      <Pressable onPress={() => navigation.navigate("Dashboard")}><Text>Go Back</Text></Pressable>
      <ScrollView>
      {data.map(x => (
        <Item key={x.product_id} item={x} navigation={navigation} />
        ))}
      </ScrollView>
      <Button title="Create Order" onPress={() => {
        console.log(Object.keys(route.params))
        if(Object.keys(route.params).length==2){
        order();
        setData([]);
        route.params.parama=[];
        navigation.navigate("Dashboard",{
          parama:[],auth:true
        });}
        else{
          this.state.isAuthenticated=true;
          navigation.navigate("signup")
        }

        }}/>
       
      
    </View>
  );
};

export default Cart;

const Item = ({item}) => {
  
  if(Object.keys(item).length <= 2){
    return null;
  }
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
          uri: item.product_image
        }}
      />

      <Text style={{flex: 1, marginLeft: 5, fontSize: 20, color: '#000'}}>
        {item.product_name}
      </Text>
      <View>
        <Text>{item.product_qty}</Text>
        <Text>{(item.product_price*item.product_qty)?item.product_price*item.product_qty:""}</Text>
      </View>
    </View>
  );
};
