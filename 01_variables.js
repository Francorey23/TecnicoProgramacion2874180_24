let saludo = "Hola Mundo"; 
console.log(saludo);

//declaradas con let
let nombres, apellidos, direccion, telefono;

nombres = "Carlos Perez";
direccion = "Carrera 18 No. 10-15";
telefono = 3219007877  //Numero Entero 
let salario = 1300000.45   //Numero Decimal
var profesion = "Abogado"


console.log(nombres);
console.log(direccion);
console.log(telefono);
console.log(profesion);

//+ concatena 
document.write(nombres + "<br>");
document.write(direccion);
document.write(telefono);
document.write(profesion);
const COLOR_RED = "#FFFFFF"
const PI = 3.1416
let estado = true; //variable booleana
let accion = false; // booleana
//variable de tipo objeto
let persona = {
    nombre: 'Ana Milena',
    edad:   21,
    direccion: "Cra 4. No.10-20",
    salario: 1350000.25
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.direccion)
console.log(persona.salario)

//variables de array
let paises = ["Buenos Aires", "Lima", "Bogotá", "Caracas"];
console.log(paises)
console.log(paises[1])

//operadores de negacion
let pension = true;
console.log(!pension);
let x = false;
let y = true;
//para utilizar operador Y &&
console.log(x && y);
//Variable de tipo array
let horas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//console.log(horas);
//index++
for (let index = 0; index < horas.length; index=index+1) {
    console.log(horas[index]);
    
}

//variable de tipo objeto JSON
var usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    salario: 1350000.50
};
console.log(usuario);
console.log("Nombres: " + usuario.persona);
console.log("Salario:"  + usuario.salario);









