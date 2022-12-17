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
      this.state.isAuthenticated = true;
      this.createToast('Logged in successfully');
    } catch (err) {
      this.state.isAuthenticated = false;
      this.createToast('Login failed');
    }
  };

  register = async data => {
    try {
      this.state.isAuthenticated = true;
      this.createToast('Account created successfully');
    } catch (err) {
      this.state.isAuthenticated = false;
      this.createToast('Please enter correct data');
    }
  };

  logout = () => {
    this.state.isAuthenticated = false;
    this.createToast('Logged out');
  };
}

export const AuthStore = new Auth();
