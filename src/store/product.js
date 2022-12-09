import {makeObservable, observable, action, runInAction} from 'mobx';

class Product {
  state = {
    products: [
      {
        name: 'chair',
        img: 'https://www.coxandcox.co.uk/media/catalog/product/a/w/aw20-1228542-supplier-lifestyle.png',
        price: 25,
        description:
          'Deserunt irure elit commodo aliquip pariatur consectetur pariatur ut deserunt id elit voluptate culpa non. Aliqua aliquip cupidatat do occaecat qui irure laborum ad proident sit amet ullamco anim. Deserunt do consectetur ut magna tempor aute ad commodo adipisicing Lorem tempor. Minim ea irure duis magna commodo culpa sit amet anim.',
      },

      {
        name: 'table',
        img: 'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/work-series-furniture-space-transformation-table-23966524506296.jpg?v=1662961052',
        price: 50,
        description:
          'Deserunt irure elit commodo aliquip pariatur consectetur pariatur ut deserunt id elit voluptate culpa non. Aliqua aliquip cupidatat do occaecat qui irure laborum ad proident sit amet ullamco anim. Deserunt do consectetur ut magna tempor aute ad commodo adipisicing Lorem tempor. Minim ea irure duis magna commodo culpa sit amet anim.',
      },

      {
        name: 'lamp',
        img: 'https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg',
        price: 150,
        description:
          'Deserunt irure elit commodo aliquip pariatur consectetur pariatur ut deserunt id elit voluptate culpa non. Aliqua aliquip cupidatat do occaecat qui irure laborum ad proident sit amet ullamco anim. Deserunt do consectetur ut magna tempor aute ad commodo adipisicing Lorem tempor. Minim ea irure duis magna commodo culpa sit amet anim.',
      },

      {
        name: 'bottle',
        img: 'http://cdn.shopify.com/s/files/1/0620/2268/0789/products/monopoly-plastic-unicorn-temperature-vacuumed-hot-and-cold-bottle-500-ml-38301375463637.jpg?v=1665306176',
        price: 200,
        description:
          'Deserunt irure elit commodo aliquip pariatur consectetur pariatur ut deserunt id elit voluptate culpa non. Aliqua aliquip cupidatat do occaecat qui irure laborum ad proident sit amet ullamco anim. Deserunt do consectetur ut magna tempor aute ad commodo adipisicing Lorem tempor. Minim ea irure duis magna commodo culpa sit amet anim.',
      },

      {
        name: 'shelf',
        img: 'http://cdn.shopify.com/s/files/1/0589/6454/1590/products/Solid-Oak-Floating-Shelf-32mm-1.jpg?v=1635342907',
        price: 10,
        description:
          'Deserunt irure elit commodo aliquip pariatur consectetur pariatur ut deserunt id elit voluptate culpa non. Aliqua aliquip cupidatat do occaecat qui irure laborum ad proident sit amet ullamco anim. Deserunt do consectetur ut magna tempor aute ad commodo adipisicing Lorem tempor. Minim ea irure duis magna commodo culpa sit amet anim.',
      },
    ],
  };

  constructor() {
    makeObservable(this, {
      state: observable,
    });
  }
}

export const ProductStore = new Product();
