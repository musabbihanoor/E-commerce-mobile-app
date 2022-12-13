import axios from 'axios';

import {ToastAndroid} from 'react-native';

import {makeObservable, observable, action, runInAction} from 'mobx';
import {BASE_URL} from './url';

class Product {
  state = {
    products: [],
    product: {},
    categories: [],
    category: null,
    cart: [],
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      getCategories: action,
      getProducts: action,
      getProductsByCategories: action,
      addToCart: action,
      createOrder: action,

      setCategory: action,
      setProduct: action,
    });
  }

  setCategory = id => {
    this.state.category = id;
  };

  setProduct = data => {
    this.state.product = data;
  };

  createToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  addToCart = product => {
    // this.state.cart = [...this.state.cart, {product: product, quantity: 1}];
    // this.state.cart.map(x => console.log(x.product, product.product_id));
    if (
      this.state.cart.find(x => x.product.product_id === product.product_id)
    ) {
      this.createToast('Already in cart');
    } else {
      this.state.cart = [...this.state.cart, {product: product, quantity: 1}];
      this.createToast('Added to cart');
    }
  };

  updateCartQuantity = (product_id, quantity) => {
    if (quantity === 0) {
      this.state.cart = this.state.cart.filter(
        x => x.product.product_id !== product_id,
      );
    } else {
      this.state.cart = this.state.cart.map(x =>
        x.product.product_id === product_id ? {...x, quantity: quantity} : x,
      );
    }
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

  createOrder = async () => {
    const data = [];

    this.state.cart.map(x => {
      data.push([x.product.product_id, x.quantity]);
    });

    console.log(data);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`${BASE_URL}/createorder`, data, config);

      console.log(res);

      return res;
    } catch (err) {
      console.log(err);
    }
  };
}

export const ProductStore = new Product();
