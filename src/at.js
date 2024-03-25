#!/bin/sh

let numero1 = 5;
let numero2 = 3;
let resultado;

resultado = (numero1 == numero2);
console.log(`${numero1} = ${numero2}? ${resultado}`);
resultado = (numero1 != numero2);
console.log(`${numero1} != ${numero2}? ${resultado}`);
resultado = (numero1 > numero2);
console.log(`${numero1} > ${numero2}? ${resultado}`);
resultado = (numero1 < numero2);
console.log(`${numero1} < ${numero2}? ${resultado}`);
resultado = (numero1 >= numero2);
console.log(`${numero1} >= ${numero2}? ${resultado}`);
resultado = (numero1 <= numero2);
console.log(`${numero1} <= ${numero2}? ${resultado}`);

