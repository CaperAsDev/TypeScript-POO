import { ProductHttpService } from './services/product_http.service.mts';

(async () => {
  try {
    const productService = new ProductHttpService();

    console.log('------> GetAll');
    const products = await productService.getAll();
    console.log(products.length);

    console.log('------> Update');
    const productId = products[0].id;
    await productService.update(productId, {
      price: 666,
      title: 'Best Product ever',
      description: 'This is the best product ever created.',
    });

    console.log('------> FindOne');
    const myProduct = await productService.findOne(productId);
    console.log(myProduct);
  } catch (error) {
    console.error(error);
  }
})();
