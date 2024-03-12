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

/* let conteoGatos = 0
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

 */

//Ejercicio 4numero primo

/* let primo = parseInt(prompt("Digite el numero a comprobar (primo): "))

let esPrimo = true
//0 -1 -2
if (primo <= 1) {
    esPrimo = false
}
if (primo%2==0) {
    esPrimo= false
}

if (esPrimo==true) {
    document.write("El numero es primo"+primo+"<br>")
}else{
    document.write("El numero NO es primo"+primo+"<br>")
}    
    
 */


//Funciones

/* function showMessage(){
    alert('Hola a cada uno de ustedes')
}

showMessage()
showMessage()

function miraElMensaje(){
    let message = "Hola Soy JavaScript"
    alert(message)
}
miraElMensaje()
//alert(message)

let userName = 'Jairo'

function showMessage2(){
    let message = 'Hola '+ userName
    alert(message)
}
showMessage2()
    
 */

//Contar todas las edades mayores digitadas por el usuario
/* let mayorEdad = 0
let edad = prompt("Digita la edad (0 para terminar)")

while (!edad==="0") {
    if(parseInt(edad)>=18){
        mayorEdad++
    }
    edad = prompt("Digita la edad (0 para terminar)")
}
document.write("Las personas mayores de edad son: ${mayorEdad}" )
 */


/* let edad = prompt("Digita la edad (0 para terminar)")


function mayorEdad(edad){
    let mayorEdad = 0  
    while (edad!=="0") {
        if(parseInt(edad)>=18){
            mayorEdad++ 
        }
        edad = prompt("Digita la edad (0 para terminar)")
    }
    document.write(`Las personas mayores de edad son: ${mayorEdad}` )
    //comillas invertidas 
}

mayorEdad(edad)
 */

