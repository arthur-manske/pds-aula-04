#!/bin/sh

var a1 = true && true;
console.log(a1); 
var a2 = true && false;
console.log(a2);
var a3 = false && true;
console.log(a3);
var a4 = false && (3 == 4); 
console.log(a4);
var a5 = "Gato" && "Cão";
console.log(a5); 
var a6 = false && "Gato";
console.log(a6);
var a7 = "Gato" && false;
console.log(a7);

