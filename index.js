// Traer la dependencia  del
//componente suma

import { sumar, restar } from './sumar.js'
import materias from './materias.js'



//let variables
//let a = 10
//const: constantes
//const b =29


//console.log(`suma de a+b:${ sumar( a, b) }`)
//console.log(`resta de a+b:${ restar( a, b) }`)


//desestructuracion

 //let {first_name,last_name, id} = estudiantes


//1. recorrido arreglo : for each

materias.forEach((materia)=>{
    if(materia.profesor === 'CRISTIAN')
    console.log(`materia: ${materia.name}`)
    console.log(`notas: ${materia.notas}`)
})
 
// 2 convertir a un arreglo de profesores 
//metodo map 
let profesores = materias.map(function(materia){
    return materia.profesor
})



//3. AGREGAR UNA MATERIA AL ARREGLO DE MATERIAS
// PUSH()
materias.push(
    {
        id:4,
        name:"FRONT END",
        profesor: "JULIAN",
         notas: [
             3.5
        ]
    }
)
//4. busqueda en arreglos
//find

 const  PHP = materias.find(function(materia){
    return materia.profesor === 'CRISTIAN'
})


console.log(PHP)
/*
console.log(`Nombre estudiante ${first_name}`)
console.log(`Apellido estudiante ${last_name}`)
console.log(`Apellido estudiante ${id}`)

*/