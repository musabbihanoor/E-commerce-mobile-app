import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Orders = ({navigation}) => {
  const [selected, setSelected] = useState('ongoing');

  return (
    <View>
      <View style={styles.switch}>
        <Pressable
          onPress={() => setSelected('ongoing')}
          style={
            selected === 'ongoing' ? styles.switchBtnSelected : styles.switchBtn
          }>
          <Text
            style={
              selected === 'ongoing'
                ? styles.switchTextSelected
                : styles.switchText
            }>
            Ongoing
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelected('history')}
          style={
            selected === 'history' ? styles.switchBtnSelected : styles.switchBtn
          }>
          <Text
            style={
              selected === 'history'
                ? styles.switchTextSelected
                : styles.switchText
            }>
            History
          </Text>
        </Pressable>
      </View>
      <ScrollView style={{padding: 20}}>
        <Pressable
          onPress={() => navigation.navigate('Order')}
          style={styles.orderItem}>
          <View>
            <Text style={styles.orderNo}>Order Number. 111</Text>
            <Text style={styles.orderItemCount}>2 items</Text>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <FontAwesomeIcon icon={faChevronDown} />
            <Text style={styles.orderDate}>Date: 10.01.2022</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Order')}
          style={styles.orderItem}>
          <View>
            <Text style={styles.orderNo}>Order Number. 111</Text>
            <Text style={styles.orderItemCount}>2 items</Text>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <FontAwesomeIcon icon={faChevronDown} />
            <Text style={styles.orderDate}>Date: 10.01.2022</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Order')}
          style={styles.orderItem}>
          <View>
            <Text style={styles.orderNo}>Order Number. 111</Text>
            <Text style={styles.orderItemCount}>2 items</Text>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <FontAwesomeIcon icon={faChevronDown} />
            <Text style={styles.orderDate}>Date: 10.01.2022</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Orders;
