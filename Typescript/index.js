// Solution Implementation:
var bool = {
    isReadonly: true,
    isEnable: false
};
console.log("EXEMPLO I: o tipo deve conter apenas entradas do tipo Bool: " + JSON.stringify(bool));
var user01 = {
    userId: 1275789,
    accountNum: 1154,
    phone: 31991523565,
    cardNum: 154865484521
};
console.log("EXEMPLO II: o tipo deve conter apenas entradas do tipo Number: ");
console.log(user01);
// Teste com propriedade booleana eliminada por meio do PickByType
console.log("Tentativa de acessar uma propriedade eliminada por meio do PickByType. Foi registrado erro ao compilar e o retorno da propriedade \u00E9: " + user01.cardVerified);
var user02 = {
    userId: 47856,
    name: 'Liev Tolstoi',
    accountNum: 234,
    phone: 31987665874,
    cardNum: 40042154321562
};
console.log("EXEMPLO III: o tipo deve conter entradas do tipo Number e String: ");
console.log(user02);
var user03 = {
    name: "Julio Cortázar"
};
console.log("EXEMPLO IV: o tipo deve conter entradas do tipo String:  " + JSON.stringify(user03));
