//Variables globales

const formularioUI = document.querySelector('#formulario');
const listaAlumnosUI = document.getElementById('listaAlumnos');
let arrayAlumnos = [];

//Funciones

const CrearAlumno = (nombre) => {
    let alumno = {
        nombre: nombre
    }
    arrayAlumnos.push(alumno);
    return alumno;
}
const GuardarAlumno = () => {
    localStorage.setItem('lista', JSON.stringify(arrayAlumnos));
}
/* Los arrays no se pueden guardar dentro del localStorage es por eso que se utiliza la función JSON.stringify para convertirlos a strings */

/* let test = CrearAlumno('Alberto Miranda');
console.log(test) */

//EventListener

formularioUI.addEventListener('submit', (e) => { 
    e.preventDefault();
    let actividadUI = document.querySelector('#names').value;
    
    CrearAlumno(actividadUI);

    formularioUI.reset(); //nos permite resetar el formulario cada vez que damos enter o click es decir se limpia el campo del formulario
    
    GuardarAlumno();

});