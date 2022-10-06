let colors = require('colors')

const estudiantes1 = ["Julian Suns",
                      "Laura Jhuliana", 
                      "Paula Lopez", 
                      "Veronica Centeno",
                      "Daniela Baena"];

const estudiantes2 = ["Camilo",
                      "Juan Diego", 
                      "Mauricio", 
                      "Valentina"];


//operador spread(resto)    
const estudiantes3 = ["Veronica Centeno",
                      ...estudiantes1,
                      "Juan Diego", 
                      ...estudiantes2 ]    
                      
console.log(estudiantes3)
//desestructuracion arreglo

//let[JS, LJ,PL, VC, DB] = estudiantes1
//console.log(JS.bgRed.black, LJ.bgYellow.black, PL.bgMagenta.blue ,VC.bgCyan.grey, DB.bgGreen.magenta )




