/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
    SIMPLE TYPES
        boolean - true or false values
        number - whole numbers and floating point values
        string - text values like "TypeScript Rocks"
        bigint - whole numbers and floating point values
        symbol are used to create a globally unique identifier.

    SPECIAL TYPES
        <any> is a type that disables type checking and allows all types to be used.
        <unknown> is a similar, but safer alternative to any.
        <never> effectively throws an error whenever it is defined.
*/

// Typed params

function sum (num1: number, num2: number): number {
  return num1 + num2
}

const calculator = (num1: number, num2: number, op: (num1: number, num2: number) => number): number => {
  return op(num1, num2)
}

console.log(calculator(1, 3, sum))

// Types

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal'
type Hero = {
  readonly id: number // readonly
  name: string
  age: number
  isActive?: boolean // optional with '?'
  powerScale: HeroPowerScale
}

function createHero (hero: Hero): Hero {
  const { id, name, age, isActive, powerScale } = hero
  return { id, name, age, isActive, powerScale }
}

const thor = createHero({ id: 1, name: 'Thor', age: 1500, powerScale: 'galactic' })
const ironman = createHero({ id: 2, name: 'Ironman', age: 44, isActive: false, powerScale: 'planetary' })

console.log(thor)
console.log(ironman)

// Template Union Types

type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = '001122'
const color2: HexadecimalColor = '#001122'

// Type from value

const address = {
  planet: 'Earth',
  city: 'Guadalajara'
}

type Address = typeof address // Get type from an object

const myAddress: Address = {
  planet: 'Mars',
  city: 'Rocky Montains'
}

console.log(myAddress)

function createPlanetaryAddress (): object {
  return {
    planet: 'Venus',
    galaxy: 'Milkyway'
  }
}

type PlanetaryAddress = ReturnType<typeof createPlanetaryAddress> // Get type from return

const myPlanetaryAddress: PlanetaryAddress = {
  planet: 'Namekusei',
  galaxy: 'Andromeda'
}

console.log(myPlanetaryAddress)

// Arrays

const languages: Array<string | number> = []
// const languages: (string | number)[] = []

languages.push('JavaScript')
languages.push('Python')
languages.push('PHP')
languages.push(2)

console.log(languages)

// Tuples

type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const myGame: GameBoard = [
  ['X', 'O', 'O'],
  ['O', 'X', ''],
  ['O', 'O', 'X']
]

type RGB = [number, number, number] // Defined structure for RGB type
type RGBA = [number, number, number, string] // Defined structure for RGBA type

const myRGBColor: RGB = [0, 255, 0]
const myRGBAColor: RGBA = [0, 255, 0, 'a'] // example

console.log(myGame)
console.log(myRGBColor)
console.log(myRGBAColor)

// Enums

const enum ERROR_TYPES {
  NOT_FOUND = 'not_found',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden'
}

function mostrarMensaje (tipoDeError: ERROR_TYPES): void {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('NOT FOUND ERROR')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('UNAUTHORIZED ERROR')
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('FORBIDDEN ERROR')
  }
}

// Type Assertions

// import { RickandMortyAPI } from "./typesRickMortyAPI"
// import fetch from "node-fetch"

// async function fetchData() {
//     try {
//         const API_URL = 'https://rickandmortyapi.com/api/character'

//         const response = await fetch(API_URL)
//         const data = await response.json() as RickandMortyAPI

//         data.results.map(character => (
//             console.log(character.name)
//         ))
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData()

// Interfaces

interface Sale {
  id: number
  name: string
  price: number
}

interface Product extends Sale {
  quantity: number
  category: string
}

interface Service extends Sale {
  type: string
}

interface ShoppingCart {
  buyer: string
  date: string
  sells: Array<Product | Service> // (Product | Service)[]
}

interface ShoppingCartOps {
  add: (item: Product | Service) => void
  remove: (id: number) => void
  clear: () => void
}

// Alternative sintaxis
interface ShoppingCartOps2 {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  add(item: Product | Service): void
  remove(id: number): void
  clear(): void
}

const myCart: ShoppingCart = {
  buyer: 'Gustavo Navarro',
  date: Date.now().toString(),
  sells: [
    { id: 1, name: 'God of War', price: 250, quantity: 1, category: 'Videogames' },
    { id: 2, name: 'Cleanning the Office', price: 1300, type: 'Cleanning' },
    { id: 3, name: 'The Avengers', price: 300, quantity: 1, category: 'Entertaiment' },
    { id: 4, name: 'Fancy T-shirt', price: 600, quantity: 3, category: 'Clothing' },
    { id: 5, name: 'Develop an app', price: 3000, type: 'Development' }
  ]
}

console.log(myCart)

// Narrowing

function showLength (value: number | string): number {
  if (typeof value === 'string') {
    return value.length
  }

  return value.toString().length
}

console.log(showLength('1'))
