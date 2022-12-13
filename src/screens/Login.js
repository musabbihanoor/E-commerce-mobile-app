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

const Login = ({navigation}) => {
  // const Toast = ({visible, message}) => {
  //   if (visible) {
  //     ToastAndroid.showWithGravityAndOffset(
  //       message,
  //       ToastAndroid.LONG,
  //       ToastAndroid.BOTTOM,
  //       25,
  //       50,
  //     );
  //     return null;
  //   }
  //   return null;
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const login = async () => {
  //     fetch('http://10.0.2.2:8000/login', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     "email":email,
  //     "password":password,

  //   })

  // }).then(response => {
  //   console.log(response)
  //   if (response.ok){
  //   navigation.navigate("Dashboard",{
  //     parama:[],
  //     auth:true,
  //   })}else{
  //     <Toast visible={true} message="Example" />
  //   }
  // }).catch(err =>console.error(err));

  //     this.state.isAuthenticated = true;

  //   };

  const onSubmit = async () => {
    AuthStore.login({email: email, password: password}).then(res => {
      res === 1 && navigation.navigate('Dashboard');
    });
  };

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

        <TouchableOpacity style={styles.btnPrimary} onPress={() => onSubmit()}>
          <Text style={styles.btnTextPrimary}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
