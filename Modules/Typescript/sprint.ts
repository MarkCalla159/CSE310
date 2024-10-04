const nick = {
    name: 'Mark',
    age: 28
}

//types
const number = 1
let n: number = 1

let a = 'hola'
let aaaa = null
let b: undefined = undefined
//Inference
const ab = 3
const ba = 6
const c = ab + ba
//functions
function hello(name: string) {
    console.log('Hello ${name}')
}

hello('Mark')
// hello(2) - Argument of type 'number' is not assignable to parameter of type 'string'

function greeting({ name, age} : { name: string, age: number}) {
    console.log('Hello ${name}, you are ${age} years old')
}

greeting({ name: 'Mark' , age: 28})

// type arrow functions

const adition = (a: number, b: number) : number => {
    return a + b
}

const substract : (a: number, b: number) => number = (a, b) => {
    return a - b
}

// return implicit <= doesn't care => void => this return nothing

//inference of anonimus functions according to the context
const avengers = ['Spidey', 'Hulk', 'Iron Man']

avengers.forEach(avengers => {
    console.log(avengers.toUpperCase())
})

// Type Alias

/*type Hero = {
    name: string
    age: number
}

let hero: Hero = {
    name: 'thor',
    age: 2000
};

function createHero(name: string, age: number): Hero { // Hero in this part is to convert thor in type instead a object
    return { name, age}
}

const thor =createHero('Thor', 2000)*/

//Optional properties
/*type HeroId = `${string}-${string}-${string}-${string}-${string}`
type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
}

let hero: Hero = {
    name: 'thor',
    age: 2000
};

function createHero(hero: Hero): Hero { // Hero in this part is to convert thor in type instead a object
    const {name, age} = hero
    return { id:crypto.randomUUID(), 
        name, 
        age, 
        isActive: true}
}

const thor =createHero({ name: 'Thor', age: 2000})
console.log(thor.isActive) // -> true

//template union types
type HexadecimalColor = `#${string}`

//const color: HexadecimalColor = '0033ff'- Type '"0033ff"' is not assignable to type '`#${string}`'
const color: HexadecimalColor = "#0033ff"*/

//Intersection Types

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type PowerScale = 'local' | 'planetary' | 'galactic' | 'universal'

type HeroBasicInfo = {
    name: string
    age: number
}
type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale? : PowerScale
}
type Hero = HeroBasicInfo & HeroProperties
let hero: Hero = {
    name: 'thor',
    age: 2000
};

function createHero(hero: Hero): Hero { // Hero in this part is to convert thor in type instead a object
    const {name, age} = hero
    return { id:crypto.randomUUID(), 
        name, 
        age, 
        isActive: true}
}

const thor =createHero({ name: 'Thor', age: 2000})
thor.powerScale = "planetary"
console.log(thor.isActive) // -> true

//template union types
type HexadecimalColor = `#${string}`

//const color: HexadecimalColor = '0033ff'- Type '"0033ff"' is not assignable to type '`#${string}`'
const color: HexadecimalColor = "#0033ff"

//TYPE INDEXING

type HeroGenInfo = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero : HeroGenInfo['address'] = {
    planet: 'Mars',
    city: 'Madrid'
}

//TYPE from Value 

const address = {
    planet: 'Mars',
    city: 'Madrid'
}

type Address1 = typeof address

const addressKick: Address1 = {
    planet: 'Mars',
    city: 'Kick'
}

//TYPE from function return

function createAddress() {
    return {
        planet: 'Mars',
        city: 'Morocco'
    }
}

type Address = ReturnType<typeof createAddress> //Extract types from functions

//ARRAYS

const languages: string[] = [] // to define the data type - to use numbers and string use this (string | number) [] instead string

languages.push('JavaScript')

//Matrix and Tuples

/*[
    ['X', 'O', 'X'], // STRING[]
    ['O', 'X', 'O'], // string[]
    ['X', '', 'O']   // string[]
]*/

type CellValue = 'X' | 'O' | ''

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]
const gameBoard: GameBoard = [
    ['X', 'O', 'X'], // STRING[]
    ['O', 'X', 'O'], // string[]
    ['X', '', 'O']   // string[]
]

gameBoard