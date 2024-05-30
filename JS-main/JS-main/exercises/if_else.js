// Ejercicio a: Crear un número aleatorio entre 0 y 1 y mostrar alertas según su valor
let randomNumber = Math.random()
if (randomNumber >= 0.5) {
  alert("Greater than 0.5")
} else {
  alert("Lower than 0.5")
}

// Ejercicio b: Mostrar mensajes de alerta según la edad
let Age = Math.floor(Math.random() * 101) // Generar un número entero entre 0 y 100

if (Age < 2) {
  alert("Bebe")
} else if (Age >= 2 && Age <= 12) {
  alert("Niño")
} else if (Age >= 13 && Age <= 19) {
  alert("Adolescente")
} else if (Age >= 20 && Age <= 30) {
  alert("Joven")
} else if (Age >= 31 && Age <= 60) {
  alert("Adulto")
} else if (Age >= 61 && Age <= 75) {
  alert("Adulto mayor")
} else {
  alert("Anciano")
}
