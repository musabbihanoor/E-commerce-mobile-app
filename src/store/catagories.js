import {makeObservable, observable, action, runInAction} from 'mobx';

class Catagories {
  state = {
    catagories: [
      
    ]
  };

getProd = async () => {
    try {
     const response = await fetch('http://10.0.2.2:8000/getAllCat');
     const json = await response.json();
     console.log(json)
     this.state.catagories=json
   } catch (error) {
     console.error(error);
   } finally {
   }
}
  constructor() {
    this.getProd()
    makeObservable(this, {
      state: observable,
    });
    
  }
}

export const CatStore = new Catagories();
