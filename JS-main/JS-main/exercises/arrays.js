// Ejercicio a: Mostrar por consola los meses 5 y 11
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]
console.log("Mes 5:", meses[4])
console.log("Mes 11:", meses[10])

// Ejercicio b: Ordenar el array de meses alfabéticamente y mostrarlo por consola
meses.sort()
console.log("Meses ordenados alfabéticamente:", meses)

// Ejercicio c: Agregar un elemento al principio y al final del array
meses.unshift("Inicio")
meses.push("Fin")
console.log(
  "Array después de agregar elementos al principio y al final:",
  meses
)

// Ejercicio d: Quitar un elemento del principio y del final del array
meses.shift()
meses.pop()
console.log(
  "Array después de quitar elementos del principio y del final:",
  meses
)

// Ejercicio e: Invertir el orden del array
meses.reverse()
console.log("Array en orden inverso:", meses)

// Ejercicio f: Unir todos los elementos del array en un único string separado por un guión
let mesesString = meses.join("-")
console.log("Array unido en un string:", mesesString)

// Ejercicio g: Crear una copia del array que contenga desde Mayo hasta Noviembre
let mesesCopia = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]
let mayoANoviembre = mesesCopia.slice(4, 11)
console.log("Copia del array de Mayo a Noviembre:", mayoANoviembre)
