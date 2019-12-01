
//const Math can be represented as an empty object "{}"
const Math = {};



function add(n1, n2){
    return n1 + n2;
}
function substract(n1, n2){
    return n1 - n2;
}
function multiply(n1, n2){
    return n1 * n2;    
}
function divide(n1, n2){
    if(n2 == 0){
        console.log('No es posible dividir entre 0')
    }else{
        return n1 / n2;
    }
}
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
/*
function hello(name){
    console.log('Hola ',name);
}*/

//este comando permite emviar objetos, variables, 
//o cualquier objeto javascript
//module.exports = hello;