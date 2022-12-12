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
    fetch('http://10.0.2.2:8000/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "customer_email":email,
    "customer_password":password,
    
  })
  
});
    this.state.isAuthenticated = true;
    
  };

  logout = () => {
    this.state.isAuthenticated = false;
  };
}

export const AuthStore = new Auth();
