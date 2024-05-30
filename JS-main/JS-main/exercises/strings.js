// Ejercicio a: Convertir texto a mayúscula
let text1 = "javascript"
let upperText = text1.toUpperCase()
console.log("Texto en mayúscula:", upperText)

// Ejercicio b: Obtener los primeros 5 caracteres
let text2 = "javascript"
let firstFiveChars = text2.substring(0, 5)
console.log("Primeros 5 caracteres:", firstFiveChars)

// Ejercicio c: Obtener los últimos 3 caracteres
let text3 = "programming"
let lastThreeChars = text3.substring(text3.length - 3)
console.log("Últimos 3 caracteres:", lastThreeChars)

// Ejercicio d: Primera letra en mayúscula y las demás en minúscula
let text4 = "javascript"
let capitalizedText =
  text4.substring(0, 1).toUpperCase() + text4.substring(1).toLowerCase()
console.log("Texto con primera letra mayúscula:", capitalizedText)

// Ejercicio e: Encontrar la posición del primer espacio en blanco
let text5 = "hello world"
let firstSpacePosition = text5.indexOf(" ")
console.log("Posición del primer espacio en blanco:", firstSpacePosition)

// Ejercicio f: Primera letra de ambas palabras en mayúscula
let text6 = "javascript programming"
let firstWord = text6.substring(0, text6.indexOf(" "))
let secondWord = text6.substring(text6.indexOf(" ") + 1)
let formattedText =
  firstWord.substring(0, 1).toUpperCase() +
  firstWord.substring(1).toLowerCase() +
  " " +
  secondWord.substring(0, 1).toUpperCase() +
  secondWord.substring(1).toLowerCase()
console.log("Texto con las primeras letras en mayúscula:", formattedText)
