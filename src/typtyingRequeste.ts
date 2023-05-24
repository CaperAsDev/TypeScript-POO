import axios from 'axios';
import { Product } from './app/models/product.model';

//? there are some ways in which we can type promises:

  //* Type the return of the function: "getProducts(): Promise<Product[]> {..."
  //< This works for outside the function, the code that uses the return would know the type, but nor inside the function

  //* Force the type of data after receive it:
  //< This is used when the library you are using don't support typying, use it as a last resort
  /* async function getProductsV2() {
    const rta = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
  < const data = rta.data as Product[]
    return data;
  } */

  //*This is the best way to type a request, type the response of the request
async function getProducts() {
  const { data } = await axios.get<Product[]>(
    'https://api.escuelajs.co/api/v1/products'
  );
  return data;
}

async function asking() {
  const products = await getProducts();
  console.log(products.map((product) => product.id));
}

asking();