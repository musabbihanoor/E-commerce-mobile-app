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

  login = async () => {
    // try {
    //   const response = await axios.get(
    //     "abcdbasdb",
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   );
    //   if (response.status === 200) {
        
    //     this.state.isAuthenticated = true;
    //     this.state.user=response.data
        
    //   }
    // } catch (error) {
    //   Errored(error);
    // }
    this.state.isAuthenticated = true;
  };

  logout = () => {
    this.state.isAuthenticated = false;
  };
}

export const AuthStore = new Auth();
