import {makeObservable, observable, action, runInAction} from 'mobx';

class Auth {
  state = {
    isAuthenticated: false,
    user: null,
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      login: action,
      logout: action,
    });
  }

  login = () => {
    this.state.isAuthenticated = true;
  };

  logout = () => {
    this.state.isAuthenticated = false;
  };
}

export const AuthStore = new Auth();
