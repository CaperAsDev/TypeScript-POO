import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

function delay(time: number) {
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Promise resolved'), time);
  });
  return promise;
}

async function getProducts() {
  const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
  return promise.data;
}

async function asking() {
  const rta = await delay(3000);
  console.log(rta);
  const products = await getProducts();
  console.log(products);
}

asking();
