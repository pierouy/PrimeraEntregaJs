class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }
}

//Creo Productos

const producto1 = new Producto (1, 'Pantalon', 1500)
const producto2 = new Producto (2, 'Remera', 700)
const producto3 = new Producto (3, 'Campera', 3000)

let total = 0;
let opcion = 0;

alert('Bienvenido/a a nuestra tienda online')
alert('En la siguiente ventana digite el código de lo que desea comprar')

do{
    opcion = parseInt(prompt(producto1.codigo + '. ' + producto1.nombre + ' $' + producto1.precio + '\n' + producto2.codigo + '. ' + producto2.nombre + ' $' + producto2.precio + '\n' + producto3.codigo + '. ' + producto3.nombre + ' $' + producto3.precio + '\n4. Salir'))
    switch(opcion){
        case 1:
            total = total + producto1.precio
            alert('Total: $' + total)
            break;
        case 2:
            total = total + producto2.precio
            alert('Total: $' + total)
            break;
        case 3:
            total = total + producto3.precio
            alert('Total: $' + total)
            break;
        case 4:
            alert('Total a pagar: $' + total)
            alert('Gracias por la compra')
            break;
        default:
            alert(opcion + ' no es una opción válida')
            break;
    }
} while(opcion !== 4)

/*let nombre = "Juan"
let apellido = "Perez"
let edad = 30

const persona = {
    nombre: 'Homero',
    apellido: 'Simpson',
    edad: 35,
    email: 'homero@gmail.com',
    esMayorEdad: true,
    calle: 'Av Siempreviva 742'
}

console.log(persona.nombre, persona.esMayorEdad)
console.log(persona)

console.log(persona['nombre'], persona['email'])

//asignando nuevo nombre y edad
persona['nombre'] = 'Marge'
persona.edad = 36

console.log(persona.nombre, persona.edad)

//no se puede
// persona = 'fede'

persona.phone = '3232323232'*/

//funciones constructoras

//this -> 'este' objeto
/*function Persona(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.hablar = function(){console.log('Hola soy ' + this.nombre)}
}

/*const persona3 = new Persona('Lucas', 'Garcia', '25')
const persona4 = new Persona('Fede', 'El mejor', '30')
console.log(persona3)
console.log(persona4)*/

/*const nombre = prompt('ingresar nombre')
const apellido = prompt('ingresar apellido')
const email = prompt('ingresar email')*/

//const saludar = () =>{
//    return 'Hola como están'
//}
//console.log(saludar())

//metodos
//let texto = 'Hola Coders'
//console.log(texto.length)
//console.log(texto.toLowerCase())
//console.log(texto.toUpperCase())

//const persona1 = new Persona('Piero','Carminati','36')

//persona1.hablar();

/*class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    hablar(){
        console.log('Hola soy ' + this.nombre)
    }
    getfullName(){
        return this.nombre + ' ' + this.apellido
    }
}

const persona1 = new Persona('Piero','Carminati','36')

console.log(persona1.getfullName())*/

/*class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.vendido = false
    }
    sumarIva(){
        this.precio = this.precio * 1.21
    }
    vender(){
        this.vendido = true
    }
}

const producto1 = new Producto('arroz', 1)
const producto2 = new Producto('fideo', '1')

producto2.sumarIva()
producto2.vender()

console.log(producto2)*/