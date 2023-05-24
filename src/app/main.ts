import { ProductMemoryService } from './services/product_memory.service.mts';

const productService = new ProductMemoryService();

productService.create({
  title: 'producto 1',
  price: 23,
  description: 'sfsdwgw',
  creationAt: new Date(1995, 1, 2),
  updatedAt: new Date(1995, 1, 24),
  categoryId: 3,
  images: ['23'],
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, { title: 'Other name' });

const rta = productService.findOne(productId);
console.log(rta);

