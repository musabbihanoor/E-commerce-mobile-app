import React, { useState } from 'react';
import {View, ImageBackground, Text, ScrollView, Pressable} from 'react-native';

import styles from '../styles';
import Svg, {Path} from 'react-native-svg';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import {CatStore} from '../store/catagories';




const Products = ({id,navigation}) => {
  const [prod, setprod] = useState([{"product_name":"huzaifa"}]);
  console.log(id)

const getProd = async () => {
    try {
     const response = await fetch(`http://10.0.2.2:8000/getProdbyCat/${id}/`);
    //  console.log(response);
     const json = await response.json();
     
     setprod(json)
   } catch (error) {
     console.error(error);
   } finally {
   }
}

  getProd()
  return (
    <ScrollView style={{margin: 30}}>
      {prod.map(x => (
        <Item2 key={x.product_id} item={x} navigation={navigation} />
      ))}
    </ScrollView>
  );
};


const Item2 = ({item,navigation}) => {
  const [count, setCount] = useState(0);
  const [data_,setData_]= useState([{}])
  return (
    <ImageBackground
      source={{
        uri: "https://res.cloudinary.com/fatum/image/upload/v1670756585/Products/home7-product5_vyrdgr.jpg",
      }}
      resizeMode="cover"
      style={styles.product}
      imageStyle={{borderRadius: 10}}
      >
      <View
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }} onPress={()=> setCount(count+1)}>
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="black"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </Svg>
        </Pressable>
        <Text style={{color: 'black', fontSize: 20, marginHorizontal: 10}}>
          {count}
        </Text>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}
          onPress={() =>  count>0?setCount(count-1):count }
          >
          <Svg height="100%" width="100%" viewBox="0 0 448 512">
            <Path
              fill="black"
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </Svg>
        </Pressable>
      </View>
      <Pressable onPress={() =>{ 
        navigation.navigate('Cart')
        }}>
      <View
        style={{
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style={{color: 'black', fontSize: 24}}>{item.product_name}</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginBottom: 3,
              marginLeft: 5,
              fontStyle: 'italic',
            }}>
            - PKR {item.product_price}
          </Text>
        </View>
        <Text style={{color: 'black'}}>{item.product_description }</Text>
      </View>
      </Pressable>
    </ImageBackground>
  );
};

const Catagories = ({navigation}) => {
  const {
    state: {catagories},
  } = CatStore;

  const [cat, setCat] = useState(1);
  return (
    <ScrollView>
      
      <ScrollView horizontal={true} style={{margin: 30}}>
      {catagories.map(x => (
         
         <Pressable key={x.product_category_id} onPress={() => setCat(x.product_category_id)}>
         <View
           style={{
             margin: 10,
           }}>
           <View
             style={{
               flexDirection: 'row',
               alignItems: 'flex-end',
             }}>
             <Text style={{color: 'black', fontSize: 24}}>{x.product_category_name}</Text>
           </View>
         </View>
         </Pressable >
       
      ))}
    </ScrollView>
    <Products id={cat} navigation={navigation}/>
    </ScrollView>
  );
};

export default Catagories;

// const Item = ({item}) => {
//   return (
   
//   );
// };