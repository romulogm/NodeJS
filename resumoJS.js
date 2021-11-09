console.log("Quantos anos você tem?");
var idade = ;
console.log(typeof idade); 

//Objeto
var pessoa = {
    primeiroNome: "Luana",
    eMulher: true, //
    nascimento: new Date(1989, 1, 12).toJSON(), 
    endereco: {
        rua: "Rua Pereira Passos", //console.log(pessoa.endereco.rua);
        bairro: "Fim de Mundo",
    }
}; // console.log(Object.values(pessoa)); 

// if statements
if (eMulher) {
    console.log("Sexo Feminino")
} 
else if (eMulher == false) {
    console.log("Sexo Masculino")
}
else {
    console.log("Desconhecido")
};

// Ternary if statements
var number = 6;
var result = number % 2 == 0 ? 'Even' : 'Odd';
console.log(result);

// Switch statements

switch (gender) {
    case "M":
        console.log("Male");
        break;
    case "F":
        console.log("Female");
        break;
    default:
        console.log("Unknown");
}


// Arrays

var nomes = [
    "Pedro", 
    "Cláudio", 
    "Jamila"
];

console.log(nomes[]);

// Operators
2 + 2;
2 - 2;
2 / 2;
2 * 2;
2 % 2; //resto da divisão             
2 ** 2; //exponencial


// Functions

function adicao(num1, num2) {
    var adicao = num1 + num2;
    console.log(adicao); 
};

var resultado = adicao(2, 10);
console.log(resultado);


// Built-in Functions
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference

// Loops
var nomes = [
    "Pedro", 
    "Cláudio", 
    "Jamila"
];

for (var i = 0; i < names.length; i++) {
    console.log(i);
}

//for of
for (const nome of nomes) {
    console.log(nome);
}

// for each
nomes.forEach(function(nome) {
    console.log(nome);
});

// while loops
var index = 0
while(index < nomes.length){
console.log(nomes[index])
index = index++;
};

// nota: do while sempre executa o do antes de testar o while
do {
    console.log(nomes[index])
index = index++;
} while (condition);

// Logical Operators
&& //and
|| //or

// Increment and decrement

console.log(variavel++) // Postfix: ele chama a variavel como ela está e depois incrementa

console.log(++variavel) // Prefix: incrementa a variável e depois a chama

// Variables
var // Escopo global.  Bad practice.
let // Variável de escopo local. 
const // Variável constante. No entanto, se a variável é um objeto, é possivel dar append em propriedades para inclui-las no OBJ.






/* 
variable name = camelCase
date(1989, 1, 12)
ES Lint - Bom para padronização e correção de aspas duplas e unicas, virgulas
console.log(`${variableA} ${variableB.toUpperCase()}`)


*/
