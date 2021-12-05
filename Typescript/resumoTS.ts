
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

// abstract classes (não é possível criar objetos a partir dela, mas é possível extender)
abstract class UserAccount{}

// Extension (Heritage)

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age); // super() pega as propriedades da classe extendida
        
        this.nickname = nickname;
        this.level = level;
    }
}


const john = new CharAccount("Jão", 45, "JOHN", 136);



// Modifiers = Public, Private, Protected and Readonly 
Protected só pode ser chamada dentro da própria classe ou da classe extendida. Fora não é possível. 


//Acessors - (Faz o GET e o SET por meio de uma função.)

get getLevel() { 
    return this.level
    console.log("GET DONE")
}
console.log(john.getlevel)

set setLevel(level) {
    this.level = level
}

// Interfaces

interface Game {
    title: string;
    description: string;
    genres: string;
    platform: string[];
    getSimilars: (title: string) => void;
}
    const Dota: Game = {
        title: "Dota",
        description: ""
        genres: ""
        platform?: ["ps3", "ps4"]
        getSimilars(title: string) => {
            console.log("Os similares são..")
        } 
    }

// Implement class with interface


class createGame implements Game {
    title: string;
    description: string;
    genres: string;

    constructor(title: string, description: string, genres: string){
        this.title = title;
        this.description = description;
        this.genres = genres;
    }
}


// Vantagens Interfaces: são extensíveis, por isso são boas para criar bibliotecas. Bom para criar classes/objetos POO.
// Vantagens: Extensões mais simples. Trabalho com tipos primitivos. Recomendado na maioria das vezes. Se 


//Generics

function useState() {
    let state: number
    function getState() {
        return state
    }
    function setState(newstate: number) {
        state = newstate;
    }
}