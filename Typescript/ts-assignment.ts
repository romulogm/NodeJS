/*

On this assignment, let's imagine you have been asked to create a new type
that can be reused. This new type T is going to be used to pick a set of properties
whose type are assignable to another type U.

Example:

```
// This is what you need to implement
type MyPickByType = <...>

type MyOnlyBoolean = MyPickByType<{ 
  name: string;
  count: number;
  isReadonly: boolean
  isEnable: boolean
}, boolean> // It should return a type with the following interface: { isReadonly: boolean; isEnable: boolean; }
```

What should this application do?
- It should have a solution for the typing challenge given above
- Your solution could consist of a single index.ts file with the type definition 
(your solution for the challenge, an implementation for PickByType) and at least 
4 examples of your newly created type being used (like the OnlyBoolean type above)

What do we expect to see in this assignment?
- You should follow good code standards for Typescript
- It should be easy to read through.

What should be submitted?
- A link to a source code repo where we can browse and evaluate the code.
- A print showing the output of some executions of the program.


P.S: There are a number of possible solutions linked here

*/



// Solution Implementation:

type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] }



// Example 1: 
type OnlyBoolean = PickByType<{ 
  name: string;
  count: number;
  isReadonly: boolean
  isEnable: boolean
}, boolean>; 

const bool: OnlyBoolean =  {
  isReadonly: true, 
  isEnable: false}

console.log(`EXEMPLO I: o tipo deve conter apenas entradas do tipo Bool: ${JSON.stringify(bool)}`)

// Example 2:

type newUser = { 
userId: number, 
name: string,
accountNum: number,
phone: number,
cardNum: number,
phoneVerified: boolean,
cardVerified: boolean,
};

type OnlyNumber = PickByType<newUser, number>;

const user01: OnlyNumber = {
  userId: 1275789,
  accountNum: 1154,
  phone: 31991523565,
  cardNum: 154865484521,
};

console.log("EXEMPLO II: o tipo deve conter apenas entradas do tipo Number: ");
console.log(user01);

// Teste com propriedade booleana eliminada por meio do PickByType
console.log(`Tentativa de acessar uma propriedade eliminada por meio do PickByType. Foi registrado erro ao compilar e o retorno da propriedade ??: ${user01.cardVerified}` );


// Example 3:

type NumberAndString = PickByType<newUser, number | string>;

const user02: NumberAndString = {
  userId: 47856,
  name: 'Liev Tolstoi',
  accountNum: 234,
  phone: 31987665874,
  cardNum: 40042154321562,
};

console.log("EXEMPLO III: o tipo deve conter entradas do tipo Number e String: ");
console.log(user02);

// Example 4:

type UserName = PickByType<newUser, string>;

const user03: UserName = {
  name: "Julio Cort??zar",
};

console.log(`EXEMPLO IV: o tipo deve conter entradas do tipo String:  ${JSON.stringify(user03)}`);