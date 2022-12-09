import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styles from '../styles';
import {SecondaryColor} from '../styles/theme';

const Input = ({placeholder, text, setText, password}) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      secureTextEntry={password ? true : false}
      placeholder={placeholder}
      style={focused ? styles.inputFocused : styles.input}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={text}
      onChangeText={e => setText(e)}
      selectionColor={SecondaryColor}
    />
  );
};

export default Input;
