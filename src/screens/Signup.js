import React, {useState} from 'react';
import {Image, Text, Pressable, TouchableOpacity, View} from 'react-native';
import Input from '../components/Input';

import {PrimaryColor, SecondaryColor} from '../styles/theme';
import styles from '../styles';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
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
        <Text style={styles.label}>Name:</Text>
        <Input text={name} setText={setName} placeholder="Enter name" />
        <Text style={styles.label}>Email:</Text>
        <Input text={email} setText={setEmail} placeholder="Enter email" />
        <Text style={styles.label}>Password:</Text>
        <Input
          password={true}
          text={password}
          setText={setPassword}
          placeholder="Enter password"
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

        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.btnTextPrimary}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
