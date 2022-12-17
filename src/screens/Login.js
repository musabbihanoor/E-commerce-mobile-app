import React, {useState} from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';

import {AuthStore} from '../store/auth';
import {PrimaryColor, SecondaryColor} from '../styles/theme';

import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import Svg, {Path} from 'react-native-svg';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    AuthStore.login({email: email, password: password});
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
      <View style={styles.form}>
        <Input
          text={email}
          setText={setEmail}
          icon={faUser}
          placeholder="Enter email"
        />

        <Input
          text={password}
          setText={setPassword}
          placeholder="Enter password"
          password={true}
          icon={faLock}
        />

        <Pressable
          style={{alignSelf: 'flex-end', marginVertical: 10}}
          onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              color: SecondaryColor,
              textDecorationColor: PrimaryColor,
              textDecorationLine: 'underline',
            }}>
            Create an account
          </Text>
        </Pressable>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => onSubmit()}>
          <Text style={{...styles.btnTextPrimary, color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
