//|------------------<<< EXAMPLE 1 >>>----------------|
//? An abstract method or field can't be directly instantiated, it just serve as a base class for subclasses.
abstract class Animal {
  constructor(
    public name: string = 'yoyo',
    protected age: number,
    private _owner: string
  ) {}
  move() {
    return 'Moving as an animal';
  }
  greeting() {
    return `Hello, I'm ${this.name} and i'm ${this.age} years old, my owner is ${this._owner}.`;
  }
}

/* const michi = new Animal('Michi', 6, 'Caper'); */ //!Cannot create an instance of an abstract class.

class Dog extends Animal {
  //?We can define static properties(don't need an instance of the class to call it) or methods in the base class or in derived classes.
  static description: string =
    'A dog is a domesticated mammal that serves as a loyal companion to humans. They come in different sizes, appearances, and temperaments due to selective breeding.';

  ownerName: string; //?Here we are declaring a new property, the value will be assigned in the constructor due to there is were the parameters are received.

  constructor(public breed: string, name: string, age: number, owner: string) {
    //? first refer to the super and then pass the arguments required
    super(name, age, owner);
    //<super makes reference to the base class, basically here we are passing the arguments to it. These arguments were received in the derived class constructor as parameters.

    //? then refer to the new properties with 'this' and define its value.
    this.ownerName = owner;
  }

  //? I can Override a method defined in the Base class to do an specific action differently.
  move(): string {
    console.log(super.move()); //< I can still call the base version of the method with "super"
    return 'moving as a dog';
  }
  //?Then you can create new methods.
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }

  //?New methods can access the
  myInfo() {
    /* console.log(`Hi, my owner is ${super._owner}`); */
    //!Property '_owner' is private and only accessible within class 'Animal'.
    //<Here is a important note about Porperties: as in the Base Class 'Animal' the properties have been declared in the constructor by assigning public or private to its properties, when we try to call a private property of the super it'll throw an Error because it's only accessible from the Base Class.

    /* console.log(`Hi, my owner is ${this.owner}`); */
    //!Property 'owner' does not exist on type 'Dog'
    //<This error is due to the fact that the 'owner' property is not declared, we are just receiving a parameter and passing it to the super as an argument, so when we try to access to it there is no instance of such a property outside the constructor.

    //?To access super variables don't use 'super.[nameOfProperty]' use 'this.[nameOfProperty]'or else it will give you an Undefined value to the propertie.
    console.log(
      `Hi, my name is ${this.name} I'm ${this.age} years old, my breed is ${this.breed} and my owner is ${this.ownerName}.`
    );
  }
}

const yin = new Dog('Criolla', 'Yin', 3, 'Caper');
console.log(yin); /* Dog {
  name: 'Yin',
  age: 3,
  breed: 'Criolla',
  ownerName: 'Caper'
} */
console.log(
  yin.myInfo()
); /* Hi, my name is Yin I'm 3 years old, my breed is Criolla and my owner is Caper. */
console.log(yin.move());
console.log(Dog.description); //<Static property

//|------------------<<< EXAMPLE 2 >>>----------------|

//? First define a interface, this will be like a checklist to control the minimun members of a class.
interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

//? Now let's implement the interface to a class

class PostgresDriver implements Driver {
  constructor(
    //?Declare the properties following the structure of the 'Driver' interface. I can add more if wanted, we just have to be sure to include the specified in the interface
    public database: string,
    public password: string,
    public port: number
  ) {}
  //?The alert won't go until you add all the 'Driver' interface properties and methods.
  connect(): void {
    //<Code
  }
  disconnect(): void {
    //<Code
  }
  isConnected(): boolean {
    return true;
  }
  newMethod() {
    return 'This method is not in the interface but is ok to add more';
  }
}

//|------------------<<< EXAMPLE 3 >>>----------------|
//? Singleton: private constructor is a way to define a class that will be instantiated only one time.
class Singleton {
  static instance: Singleton | null = null;
  private constructor(public name: string) {}
  static create(name: string){
    if(Singleton.instance === null){
      Singleton.instance = new Singleton(name);
    }
    return Singleton.instance;
  }
}

/* const mySingleton = new Singleton(); */
//! Constructor of class 'Singleton' is private and only accessible within the class declaration.
const mySingleton2 = Singleton.create('caper');
console.log(mySingleton2);
console.log(Singleton.instance);

