
enum
/*
interface Point {
    x = number,
    y = number 
 }

 let drawPoint = (point: Point) => {
     // ...
 }

*/
 class Point {
     private x: number;
     public y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

     draw(){
         console.log('X:' + this.x + ' Y:' + this.y);
     };
    
 };

 // cria objeto a partir da classe Point
 let Point = new Point();
 point.x = 1;
 point.y = 2;
 
point.draw();

// Access Modifiers = Public, Private and Protected

properties
modules // add export before class and import when calling it from another archive ex: import { Point } from './point';


// Types
number 
array (type[])
tuple (array com tipos e qtd de elementos previamente definidos)
string
enum (conjunto kay : value)
any
void (não retorna nada)
null e undefined (tipos não definidos)
never (nunca vai retornar - ex. throw new Error - erro não retorna)
object (qualquer coisa q não seja algum dos tipos primitivos (bool, string, number))


// Type Inference
Se passo um tipo para uma variável, ele já infere que este será o tipo da variável. 


//Union and Type Alias  
item: string | number;


type user = string | number;
item: user


type Platform = "Windows" | "Mac" | "Linux" // Tipo com entradas específicas

// Intersection

type accountInfo = {
    id: number;
    name: string;
    email?: string; // ? faz o campo ser opcional
};

const account: accountInfo = {
    id: 123;
    name: 'John'
};

type charInfo = {
    nickname: string;
    level: number;
};

const char: charInfo = {
    nickname: 'JohnJohn'
    level: 1
};

type playerInfo = accountInfo & charInfo // intersection

const player1: playerInfo = {
    id: 123;
    name: 'John'
    nickname: 'JohnJohn'
    level: 1
}


// classes

class UserAccount{
    name: string;
    age: number;

    constructor(name: string, age: number){
    this.name = name;
    this.age = age;
    }
    
    logDetails(): void {
        console.log("O jogador $(this.name) tem $(this.age) anos de idade.")
    }
    
};

const will = new UserAccount("jorge", 40);
will.logDetails();

// Extension (Heritage)

