# 🤓TypeScript: OOP & asynchronous

## 👀Remeber the initial steps:
Down below I'll share my initial configuration, you can follow them or make as you are used to.
1. **npm create vite@latest** then follow the instructions.
2. **git init** - **git add .** - **git commit -m**.
3. With github Desktop, add the repository and then publish it. Push the repository.
4. **npm install**.
5. Delete or start working with the default files.

## 📚OOP typeScript
### [🔖Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content)
We'll be treating classes in the [tsClasses.ts](./src/tsClasses.ts) file, with some notes here.
- Classe have been supported since ES6 so deppending which "module" you have in the [tsconfig.json](./tsconfig.json) the compiled file in .js will have a different sintax for class declaration: class or function.
- Function declared inside a funciton are called [method](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods).
- You can use TypeScript to control whether certain methods or properties are visible to code outside the class:
  -  [Public](https://www.typescriptlang.org/docs/handbook/2/classes.html#public): is the default visibility modifier, this member(method or property) can be accessed anywhere.
  - [Private](https://www.typescriptlang.org/docs/handbook/2/classes.html#private): private members are only accessible inside the class where were declared.
  - [Protected](https://www.typescriptlang.org/docs/handbook/2/classes.html#protected): is like private but also subclasses can access to the member.

- An abstract class is a class that can't be instantiated directly, we can create an extended version. This classes serve as a base class for subclasses. See an implementation in the **example 1** in [advanceOop.ts](./src/advanceOop.ts) file.

#### 📦[Getters and setters](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

The main idea of using Setters and Getters is that you want to control both, the readable and assignable qualities of a property, if there is no extra filter or processing, there is no need to use them.

##### 📤Getter:
Is used to ask for a value, a getter will always return something. A getter can refer to an existing property or not.

##### 📥Setter:
A getter poperty without a Setter will be defined as read-only. We use setter to assign or re-assign a value to a property.

#### 🏗[Implements](https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses)
Implement is used when we want to specify a minimun structure for a class. The structure is defined in an interface where we specify the basic properties and methods. See an implementation in the **example 2** in [advanceOop.ts](./src/advanceOop.ts) file.

#### 👆🏽Singleton
A singleton class is made to limit the number of instances to just one, this is made setting the constructor of the class in private and creating the instance through a static method. See an implementation in the **example 3** in [advanceOop.ts](./src/advanceOop.ts) file.

### 👨‍👩‍👧‍👦[Class Heritage](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-heritage)

A derived class has all the properties and methods of its base class, of course it make no sense to just copy a class, so you can add new methods and properties as if it were a new class.

Take into account the member visibility because it will limit the access to the members.

This topic is treated with notes in the [advancedOop.ts](./src/advanceOop.ts) file. In this file we also address the [static Members](https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members), which are members not associated with a specific instance but rather with the constructor object itself.