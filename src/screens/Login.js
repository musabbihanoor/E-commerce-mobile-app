import React, {useState} from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../components/Input';
import styles from '../styles';

import {AuthStore} from '../store/auth';
import {PrimaryColor, SecondaryColor} from '../styles/theme';

const Login = ({navigation}) => {
  const {login} = AuthStore;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg',
        }}
        style={{width: 100, height: 100}}
      />
      <View style={styles.form}>
        <Text style={styles.label}>Email:</Text>
        <Input text={email} setText={setEmail} placeholder="Enter email" />
        <Text style={styles.label}>Password:</Text>

        <Input
          text={password}
          setText={setPassword}
          placeholder="Enter password"
          password={true}
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

        <TouchableOpacity style={styles.btnPrimary} onPress={login}>
          <Text style={styles.btnTextPrimary}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
