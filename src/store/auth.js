import axios from 'axios';
import {makeObservable, observable, action, runInAction} from 'mobx';
import {BASE_URL} from './url';

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
    } catch (err) {
      console.log(err);
      this.state.isAuthenticated = false;
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
    } catch (err) {
      console.log(err);
      this.state.isAuthenticated = false;
    }
  };

  logout = () => {
    this.state.isAuthenticated = false;
  };
}

export const AuthStore = new Auth();
