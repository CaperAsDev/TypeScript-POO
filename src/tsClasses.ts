//? Every property or method is by default set as public, this means that I can access to its value and modify them from outside the class.

//? If I want any data to be inaccessible from outside the class, I should refer 'private' before the declaration.

class MyDate {
  //< Remember to use PascalCase when defining a class name.
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    //< A variable declared inside a class is known as a 'property'
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormatted(): string {
    //< A function declared inside a class is known as 'Method'
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${this.year}/${month}/${day}`;
  }
  private addPadding(data: number) {
    //<This is an example of a private method
    if (data < 10) {
      return `0${data}`;
    } else {
      return `${data}`;
    }
  }
  add(amount: number, type: 'days' | 'months' | 'years'): string {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }

    return this.printFormatted();
  }
}

const myDate = new MyDate(1995, 1, 2);
console.log(myDate.printFormatted());
console.log(myDate.add(28, 'years'));

//? there is another way to define a class in a shorter way:

class MyDatev2 {
  //< With the constructor I can declare and initialize a property, but we have to specify the visibility modifier
  constructor(
    public year: number = 1995,
    public month: number = 1,
    private _day: number = 2//* a private property that can't be accessed outside the class
  ) {}

  //*getter methods let us define a function that will return a value when is called as a property: in this example we define "isLeapYear" with a get bur notice we don't have any property with that name, is just to pretend there is it.
  get isLeapYear(): boolean {
    if(this.year % 400 === 0)return true;
    if(this.year % 100 === 0)return false;
    return this.year % 4 === 0;
  }
  get day(){//* A getter with the day name that accesses to the private property "_day"
    return this._day
  }
  set day (value: number) {//* If we wouldn't set this, the "property" 'day' will be a readOnly property
    if (value >= 1 && value <= 31) {
      this._day = value;
    }
    else{
      throw new Error(`Invalid day: ${value}`);
    }
  }
}

const myDateV2 = new MyDatev2(1973, 3, 28);
console.log('myDateV2' , myDateV2);
console.log('day' , myDateV2.day);
console.log( 'is leap year? = ', myDateV2.isLeapYear);
myDateV2.day = 30;
console.log('day modified' , myDateV2.day);
myDateV2.day = 35;
console.log('The day that never comes' , myDateV2.day);