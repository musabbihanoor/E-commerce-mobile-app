import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../styles';

import Svg, {Path} from 'react-native-svg';

import {AuthStore} from '../store/auth';

const Header = ({heading, navigation, hideCart}) => {
  return (
    <View style={styles.header}>
      <Pressable style={{width: 20, height: 20}}>
        <Svg height="100%" width="100%" viewBox="0 0 448 512">
          <Path
            fill="white"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </Svg>
      </Pressable>
      <Text style={styles.headerText}>{heading}</Text>
      {!hideCart && (
        <Pressable
          style={{width: 20, height: 20, marginHorizontal: 10}}
          onPress={() => navigation.navigate('Cart')}>
          <Svg height="100%" width="100%" viewBox="0 0 576 512">
            <Path
              fill="white"
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </Svg>
        </Pressable>
      )}
      <Pressable
        style={{width: 20, height: 20, marginHorizontal: 10}}
        onPress={AuthStore.logout}>
        <Svg height="100%" width="100%" viewBox="0 0 512 512">
          <Path
            fill="white"
            d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
          />
        </Svg>
      </Pressable>
    </View>
  );
};

export default Header;
