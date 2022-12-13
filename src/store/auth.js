import axios from 'axios';
import {makeObservable, observable, action, runInAction} from 'mobx';
import {BASE_URL} from './url';

import {ToastAndroid} from 'react-native';

class Auth {
  state = {
    isAuthenticated: false,
    user: null,
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      login: action,
      register: action,
      logout: action,
    });
  }

  createToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  login = async data => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`${BASE_URL}/login`, data, config);
      console.log(res);
      this.state.isAuthenticated = true;

      this.createToast('Logged in successfully');

      return 1;
    } catch (err) {
      console.log(err);
      this.state.isAuthenticated = false;

      this.createToast('Login failed');

      return 0;
    }
  };

  register = async data => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`${BASE_URL}/registration`, data, config);
      console.log(res);
      this.state.isAuthenticated = true;

      this.createToast('Account created successfully');

      return 1;
    } catch (err) {
      console.log(err);
      this.state.isAuthenticated = false;

      this.createToast('Please enter correct data');

      return 0;
    }
  };

  logout = () => {
    this.state.isAuthenticated = false;
  };
}

export const AuthStore = new Auth();
