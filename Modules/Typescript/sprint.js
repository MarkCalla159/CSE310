"use strict";
const nick = {
    name: 'Mark',
    age: 28
};
//types
const number = 1;
let n = 1;
let a = 'hola';
let aaaa = null;
let b = undefined;
//Inference
const ab = 3;
const ba = 6;
const c = ab + ba;
//functions
function hello(name) {
    console.log('Hello ${name}');
}
hello('Mark');
// hello(2) - Argument of type 'number' is not assignable to parameter of type 'string'
function greeting({ name, age }) {
    console.log('Hello ${name}, you are ${age} years old');
}
greeting({ name: 'Mark', age: 28 });
// type arrow functions
const adition = (a, b) => {
    return a + b;
};
const substract = (a, b) => {
    return a - b;
};
// return implicit <= doesn't care => void => this return nothing
//inference of anonimus functions according to the context
const avengers = ['Spidey', 'Hulk', 'Iron Man'];
avengers.forEach(avengers => {
    console.log(avengers.toUpperCase());
});
let hero = {
    name: 'thor',
    age: 2000
};
function createHero(hero) {
    const { name, age } = hero;
    return { id: crypto.randomUUID(),
        name,
        age,
        isActive: true };
}
const thor = createHero({ name: 'Thor', age: 2000 });
thor.powerScale = "planetary";
console.log(thor.isActive); // -> true
//const color: HexadecimalColor = '0033ff'- Type '"0033ff"' is not assignable to type '`#${string}`'
const color = "#0033ff";
const addressHero = {
    planet: 'Mars',
    city: 'Madrid'
};
//TYPE from Value 
const address = {
    planet: 'Mars',
    city: 'Madrid'
};
const addressKick = {
    planet: 'Mars',
    city: 'Kick'
};
//TYPE from function return
function createAddress() {
    return {
        planet: 'Mars',
        city: 'Morocco'
    };
}
//ARRAYS
const languages = []; // to define the data type - to use numbers and string use this (string | number) [] instead string
languages.push('JavaScript');
const gameBoard = [
    ['X', 'O', 'X'], // STRING[]
    ['O', 'X', 'O'], // string[]
    ['X', '', 'O'] // string[]
];
gameBoard;
