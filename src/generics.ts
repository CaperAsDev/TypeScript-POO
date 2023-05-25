import { Dog } from './advanceOop.mts';
import axios from 'axios';
import { Product } from './app/models/product.model';
import { Category } from './asynchronous';
import { UpdateProductDTO } from './app/dtos/product.dto';

//|-----------------<<<<< GENERICS  >>>>>-------------|
//|---------------------------------------------------|

//?Lets recap types briefly:

//*I can type a value to receive just one type of value and it will easily help me, with hints about methods and else.
function getValueUniqueType(value: number) {
  return value;
}
//Typescript give me accurate hints according to the type.
getValueUniqueType(124).toFixed(1);
//?--------------------------------

//?--------------------------------
//*If I want a more flexible function I would have to join more types:
function getValueMultyType(value: number | string) {
  return value;
}
//Since now I can receive and return more than one type of value, typeScript don't help me with hints.
getValueMultyType(124); // Don't get good hints
getValueMultyType('123'); // Don't get good hints
//?--------------------------------

//?--------------------------------
function getValueUnknowType(value: unknown) {
  return value;
}
// With 'unknown' I have to check the type before get any help from TypeScript.
getValueUnknowType(124); //! Object is of type 'unknown'
getValueUnknowType('123'); //! Object is of type 'unknown'

//?With that summary, let's see what genetics let us do.

function getValueGeneric<mytype>(value: mytype) {
  //* Here I'm telling TypeScript "Infer the type of the parameter according to its value"
  return value;
}

getValueGeneric(5); //Typescript recognizes the type of the parameter and give me hints accordingly.
getValueGeneric<string>('Caper'); //I can also 'send' the type of the parameter I'm sending.

const yinyer = new Dog('criolla', 'Yin', 3, 'Caper');
getValueGeneric<Dog>(yinyer);

//?--------------------------------
//?-----------With Service---------
//?--------------------------------

//<Now we'll apply the generic typying to the api request

class BaseService<serviceType> {
  //*I'm not telling my class which type of data will recive, the type will be send when the instance is created
  constructor(protected url: string) {}
  async getAll() {
    const { data } = await axios.get<serviceType[]>(this.url);
    return data;
  }
  //!Note how I can send diffrent generic types along my class, and more than one at the same time, I have to be sure to don't get confused in their use.
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}
//<When I create the instance i'm sending the type of date that will manage so I can have the hints of TypeScript

const ulrProduct = 'https://api.escuelajs.co/api/v1/products';
const productService = new BaseService<Product>(ulrProduct);
productService.update<Product['id'], UpdateProductDTO>(2,{title: 'Best Product'})

const ulrCategory = 'https://api.escuelajs.co/api/v1/categories';
const categoryService = new BaseService<Category>(ulrCategory);


//< what is cool about this is that I don't have to create different classes for each type of data, I can buil just one that type its data as soon as is instantiated. This is a felxible way of doing our Classes.
(async() => {
  console.log((await productService.getAll()).length);
  console.log((await categoryService.getAll()));
})();

//?We now have a general Service built, but the idea is not to use always that, instead i want to create a new specific service that consume the base service:

class ProductCrudService {
  protected url = 'https://api.escuelajs.co/api/v1/products';
  protected http =  new BaseService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDTO){
    return this.http.update(id, dto);
  }
}
const anotheProductService = new ProductCrudService;
anotheProductService.update(5,{title: 'You know what I mean'})

//?We can of course just extend the Base class to add more functionality and adapt it to the current needs.

export class AnotherProductService extends BaseService <Product>{
  anotherRequest(){
    this.url;
    //Doing Something...
  }
};