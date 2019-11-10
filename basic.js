//Javascript Basics
console.log("Starting javascript...")
var myName = "Virginia"
console.log(myName)
var myAge = 28
console.log(myAge)
var ignasiAge = 32
var ageDiff = myAge - ignasiAge
console.log(ageDiff)

if (myAge > 21) {
    console.log("You are older than 21")
}
else if (myAge < 21) {
    console.log("You are younger than 21")
}
else if (myAge == 21) {
    console.log("You are 21 years old")
}
else {
    console.log("Wrong comparition")
}


if (myAge > ignasiAge) {
    console.log("Ignasi is younger than you")
}
else if (myAge < ignasiAge) {
    console.log("Ignasi is older than you")
}
else if (myAge == ignasiAge) {
    console.log("You have the same age as Ignasi")
}

//ARRAYS ejercicios

//ejercicio 1
var classMatesArray = ["Soledad", "Gonzalo", "Maria", "Juan", "Verónica","Paula", "Gastón", "Antonia"]
console.log(classMatesArray[0])//imprime el primero
console.log(classMatesArray [classMatesArray.length -1])//imprime el último

//uso un for para recorrer y mostrar cada índice del array
for (let i = 0; i < classMatesArray.length; i++)
console.log(classMatesArray[i])

//ejercicio 2
var ageStudents = [18, 20, 22, 25, 32, 34, 45, 48]

i=0
while (i < ageStudents.length) {
   // console.log(ageStudents[i]) //print every age
   //i++ //don't forget or this will loop for evah
    
    if(ageStudents[i] % 2 === 0) {
        console.log(ageStudents[i])
        i++
    }

}
