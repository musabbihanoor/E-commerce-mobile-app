import axios from 'axios';

import {makeObservable, observable, action, runInAction} from 'mobx';
import {BASE_URL} from './url';

class Product {
  state = {
    products: [],
    categories: [],
    category: null,
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      getCategories: action,
      getProducts: action,
      getProductsByCategories: action,
    });
  }

  setCategory = id => {
    this.state.category = id;
  };

  getCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getAllCat`);
      console.log(res.data);
      this.state.categories = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  getProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getAllProd`);
      console.log(res);
      this.state.products = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  getProductsByCategories = async id => {
    try {
      const res = await axios.get(`${BASE_URL}/getProdbyCat/${id}/`);
      console.log(res);
      this.state.products = res.data;
    } catch (error) {
      console.error(error);
    }
  };
}

export const ProductStore = new Product();
