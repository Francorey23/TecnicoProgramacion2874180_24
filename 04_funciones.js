

/* let mayorEdad = 0
let menorEdad = 0

let edad = parseInt(prompt("Digite la edad (0 para terminar: "))

while (edad != 0) {
    if (edad>=18) {
        //mayorEdad=mayorEdad+1
        mayorEdad++
    }else{
        menorEdad++
    }
    edad = parseInt(prompt("Digite la edad (0 para terminar: "))
}
document.write("Las personas con edades mayor a 18 o igual son: "+mayorEdad+"<br>")
document.write(`Las personas con edades menores a 18 
son: ${menorEdad}`)

 */
//crear la funcion 
function showMessage() {
    alert("Hola a todos!!")
}

//showMessage()

// las variables que se trabajan en la funcion solo se reconcen dentro no por fuera
//alert(numero1)
//alert(numero2)
let numero3 = 1900000

function suma() {
    let operacion = 0
    let numero1 = 150000
    let numero2 = 350000
    operacion = numero1 + numero2 + numero3
    alert(operacion)
}
/*  suma()
 suma()
 */ 

let numero1 = parseFloat(prompt("Digite el primer numero: "))
let numero2 = parseFloat(prompt("Digite el segundo numero: "))
let opera = prompt("Indique la operacion a realizar (+ - * /")
function artimetica(num1, num2, operacion) {
    if (!isNaN(num1) && !isNaN(num2) && operacion==="+") {
        let operacion = num1 + num2
        alert("El resultado de la suma es: "+ operacion)    
    }else{
        if (!isNaN(num1) && !isNaN(num2) && operacion==="-") {
            let operacion = num1 - num2
            alert("El resultado de la resta es: "+ operacion)    
        }
        else{
            alert(`debe digitar un operador valido ${operacion}`)
        }         
    }
}
artimetica(numero1, numero2, opera)

