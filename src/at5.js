#!/bin/sh

let a = 12;
let b = 7;
let c = 1;
let d = 20;

console.log(`${(a > 9 && a < 21) || b == 5}`);
console.log(`${a > 9 || b == 5}`);

console.log(`${(a > 9 && a < 21) || b == 5 || c == 10}`);
console.log(`${(a > 9 || b == 5) && c != 10}`);

console.log(`${((a > 9 && a < 21) || b == 5) && c != 10 && d != 20}`);
