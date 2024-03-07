/*  OPERADORES ARITMETICOS 
    Suma (+): se utiliza para sumar dos valores numéricos o concatenar dos cadenas de texto.
    Resta (-): se utiliza para restar dos valores numéricos.
    Multiplicación (*): se utiliza para multiplicar dos valores numéricos.
    División (/): se utiliza para dividir dos valores numéricos.
    Módulo (%):  MOD se utiliza para obtener el resto de una división entre dos valores numéricos.
    Resto   % no esta relacionado con porcentaje
    Exponenciación es **

Estan también los operadores de 
incremento (++) y el operador de decremento (--),
i=i+1  // i++ // i--
*/
//Ejercicio hallar el impuesto por la compra de un computador sabiendo que el IVA es de 16%

//let valorProducto = 3600000;

/* let valorProducto = parseFloat(prompt("Digite el valor del Pc"));
const IVA = 0.16;

let productoConIva= (valorProducto*IVA)+valorProducto;
//let total = valorProducto + productoConIva;
console.log(productoConIva.toLocaleString());
document.write("El valor del Pc + IVA es: "+productoConIva.toFixed(2)+"<br");

document.write("----------------------------------------------------------"+"<br>");
document.write("Ejercicio 2"+"<br>");

let notaUno = parseFloat(prompt("Digite la primera nota: "));
let notaDos = parseFloat(prompt("Digite la segunda nota: "));
let Final = parseFloat(prompt("Digite la nota final: "));

if (notaUno >=0 && notaDos >=0 && Final>=0 ) {
    let resultadoNotas = (notaUno*0.40)+(notaDos*0.30)+(Final*0.30)
    console.log("Nota definitiva es:" + resultadoNotas);    
}else{
    console.log("Verifique las notas ingresadas deben ser mayor ó = a 0 : ");
}
 */

/* Ej 3 Escribe un programa que calcule el Índice de Masa Corporal (IMC) de 
una persona y muestre el rango en el que se encuentra: bajo peso, normal, 
sobrepeso u obesidad. Usa condicionales para mostrar el resultado adecuado 
según el valor del IMC. */

/* let pesoPersona = parseFloat(prompt("Digite su peso: "))
let alturaPersona = parseFloat(prompt("Digite su altura: "))

//let alturametros2 = alturaPersona*alturaPersona
let IMC = pesoPersona/(alturaPersona*alturaPersona)
    
console.log(IMC)
if (IMC < 18.5) {
    console.log("Bajo Peso");
}else{
    if (IMC >= 18.5 && IMC <= 24.9) {
        console.log("Es normal");
    }else{
        if (IMC>25) {
            console.log("Sobrepeso")
        }
    }

}
 */
/* Ejer 4 Desarrolla un algoritmo que convierta una puntuación numérica
 (0 a 100) en una calificación cualitativa  (A, B, C, D, F)
  usando condicionales. Por ejemplo, 90-100 es A, 80-89 es B, etc */

let puntuacion = parseInt(prompt("Digite un numero [1-100]:"))

if (!isNaN(puntuacion)) {
    //console.log(puntuacion)
    if (puntuacion > 90 && puntuacion < 100) {
        console.log("Usted pertenece a la categoria A")
    }else{
        if (puntuacion > 80 && puntuacion <= 89) {
            console.log("Usted pertenece a la categoria B")
        }
    }
}



 /* Ejer 5. Crea un programa que calcule la tarifa de envío de un paquete 
 según su peso. Por ejemplo, menos de 2kg cuesta $5000, entre 2kg y 5kg 
 cuesta $10000, y más de 5kg cuesta $15000.
        */


 let tarifa = parseFloat(prompt("Digite el peso del paquete: "))
 if (!isNaN(tarifa)){
    if(tarifa<2){
        console.log("cuesta 5000")
    }else{
        if(tarifa>=2 && tarifa <=5){
            console.log("cuesta 10000")
        }else{
            if(tarifa>5){
                console.log("cuesta 15000")
            }
        }
    }
 }
































