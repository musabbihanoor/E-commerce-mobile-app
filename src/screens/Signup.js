import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Input from '../components/Input';

import {PrimaryColor, SecondaryColor} from '../styles/theme';
import styles from '../styles';
import {faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Svg, {Path} from 'react-native-svg';

import {AuthStore} from '../store/auth';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    AuthStore.register({
      email: email,
      password: password,
      name: name,
    });
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Svg height="30%" width="50%" viewBox="0 0 448 512">
        <Path
          fill="#21282F"
          d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z"
        />
      </Svg>
      <View style={{...styles.form}}>
        <Input
          text={name}
          setText={setName}
          placeholder="Enter name"
          icon={faUser}
        />
        <Input
          text={email}
          setText={setEmail}
          placeholder="Enter email"
          icon={faEnvelope}
        />
        <Input
          password={true}
          text={password}
          setText={setPassword}
          placeholder="Enter password"
          icon={faLock}
        />

        <Pressable
          style={{alignSelf: 'flex-end', marginVertical: 10}}
          onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              color: SecondaryColor,
              textDecorationColor: PrimaryColor,
              textDecorationLine: 'underline',
            }}>
            Already have an account
          </Text>
        </Pressable>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => {
            // Register();
            // navigation.navigate('Dashboard', {parama: [], auth: true});
            onSubmit();
          }}>
          <Text style={{color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
