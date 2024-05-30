// Ejercicio a: Recorrer un array de 5 palabras y mostrar una alerta con cada palabra
let words = ["apple", "banana", "cherry", "date", "elderberry"]
for (let i = 0; i < words.length; i++) {
  alert(words[i])
}

// Ejercicio b: Convertir la primera letra de cada palabra en mayúscula y mostrar una alerta
for (let i = 0; i < words.length; i++) {
  let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  alert(capitalizedWord)
}

// Ejercicio c: Crear una variable "sentence" y guardar cada palabra del array en ella
let sentence = ""
for (let i = 0; i < words.length; i++) {
  sentence += words[i] + " "
}
alert(sentence.trim()) // .trim() para eliminar el espacio en blanco al final

// Ejercicio d: Crear un array vacío y llenarlo con números del 0 al 9
let numbers = []
for (let i = 0; i < 10; i++) {
  numbers.push(i)
}
console.log(numbers)
