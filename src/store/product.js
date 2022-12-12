import {makeObservable, observable, action, runInAction} from 'mobx';

class Product {
  state = {
    products: [
      
    ]
  };

getProd = async () => {
    try {
     const response = await fetch('http://10.0.2.2:8000/getAllProd');
     const json = await response.json();
     
     this.state.products=json
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

export const ProductStore = new Product();
