import { faker } from '@faker-js/faker';
import { Product } from '../models/product.model';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../models/product_service.model';

export class ProductMemoryService implements ProductService{
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDTO): Product {
    const newData = {
      ...data,
      id: faker.number.int(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        image: faker.image.url(),
      },
    };
    return this.add(newData);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(idProduct: Product['id'], changes: UpdateProductDTO) {
    const index = this.products.findIndex((p) => p.id === idProduct);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}

export const saludo = 'Hola';
