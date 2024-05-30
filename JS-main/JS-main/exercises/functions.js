// Ejercicio a: Crear una función suma
function suma(a, b) {
  return a + b
}

// Ejecutar la función y mostrar el resultado en la consola
let resultado = suma(5, 3)
console.log("Resultado de la suma:", resultado)

// Ejercicio b: Agregar validación para controlar si alguno de los parámetros no es un número
function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene error")
    return NaN
  }
  return a + b
}

// Probar la función sumaValidada
resultado = sumaValidada(5, "3") // Este debería mostrar una alerta
console.log("Resultado de la suma validada:", resultado)

// Ejercicio c: Crear una función validate integer
function validateInteger(num) {
  return Number.isInteger(num)
}

// Probar la función validateInteger
console.log("¿Es 5 un número entero?:", validateInteger(5))
console.log("¿Es 5.3 un número entero?:", validateInteger(5.3))

// Ejercicio d: Validar que los números sean enteros en la función suma
function sumaValidadaConEnteros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene error")
    return NaN
  }
  if (!validateInteger(a)) {
    alert("El primer parámetro no es un entero. Redondeando.")
    a = Math.round(a)
  }
  if (!validateInteger(b)) {
    alert("El segundo parámetro no es un entero. Redondeando.")
    b = Math.round(b)
  }
  return a + b
}

// Probar la función sumaValidadaConEnteros
resultado = sumaValidadaConEnteros(5.7, 3.2) // Este debería redondear y sumar
console.log("Resultado de la suma validada con enteros:", resultado)

// Ejercicio e: Convertir la validación en una función separada
function validateAndRound(num) {
  if (!validateInteger(num)) {
    alert("El número no es un entero. Redondeando.")
    return Math.round(num)
  }
  return num
}

function sumaConValidacionSeparada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene error")
    return NaN
  }
  a = validateAndRound(a)
  b = validateAndRound(b)
  return a + b
}

// Probar la función sumaConValidacionSeparada
resultado = sumaConValidacionSeparada(5.7, "3") // Este debería mostrar una alerta de tipo de dato
console.log("Resultado de la suma con validación separada:", resultado)
