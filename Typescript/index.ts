
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
console.log(`Tentativa de acessar uma propriedade eliminada por meio do PickByType. Foi registrado erro ao compilar e o retorno da propriedade é: ${user01.cardVerified}` );


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
  name: "Julio Cortázar",
};

console.log(`EXEMPLO IV: o tipo deve conter entradas do tipo String:  ${JSON.stringify(user03)}`);