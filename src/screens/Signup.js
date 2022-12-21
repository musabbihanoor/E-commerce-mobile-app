import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
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
  };

  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../assets/icons/Login.jpg')}
      />
      <ScrollView style={{...styles.form}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Poppins-SemiBold',
            color: '#000',
            marginBottom: 20,
          }}>
          Create an account
        </Text>

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
              color: 'gray',
              textDecorationColor: 'gray',
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
      </ScrollView>
    </View>
  );
};

export default Signup;
