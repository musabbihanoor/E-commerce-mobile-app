import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from '../styles';
import {SecondaryColor} from '../styles/theme';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Input = ({placeholder, text, setText, password, icon}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 10,
      }}>
      {icon && <FontAwesomeIcon icon={icon} />}
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
    </View>
  );
};

export default Input;
