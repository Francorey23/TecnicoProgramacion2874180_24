/* let serie = parseFloat(prompt("Digite el numero para realizar la serie: "))
let i = 0;
while (i<serie) {
    i=i+1
    document.write(i+",")
}
 */
/* let serieFor = parseFloat(prompt("Digite el numero para realizar la serie: "))
for (let index = 0; index < serieFor; index++) {
    console.log(index)
    
} */

//Ejercicio 4. Realizar un programa que permita ingresar el tipo de mascota y la edad
//(perro o gato y realizar el contenteo de gatos y perros y la sumatoria de c/u hasta que digite 0)

let conteoGatos = 0
let conteoPerros = 0
let edadPerros = 0
let edadGatos = 0
 
while (true) {
    let mascota = prompt("Escriba el tipo de mascota (gato o perro): ")
    //mascota =toUpperCase(mascota)
    if (mascota==="0") {
        break;
    }else if (mascota==="perro") {
        let edad = parseInt(prompt("Digite Edad: "))
        conteoPerros = conteoPerros + 1
        edadPerros = edadPerros+edad
    }else if (mascota==="gato") {
        let edad = parseInt(prompt("Digite Edad: "))
        conteoGatos++
        edadGatos=edadGatos+edad 
    }
}
document.write("La cantidad de perros es: "+conteoPerros+"<br>")
document.write("La cantidad de gatos es: "+conteoGatos+"<br>")
document.write("Suma edad de los perros: "+edadPerros+"<br>")
document.write("Suma edad de los gatos: "+edadGatos+"<br>")



