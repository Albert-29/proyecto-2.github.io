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
    VerAlumnos();
} /* Los arrays no se pueden guardar dentro del localStorage es por eso que se utiliza la función JSON.stringify para convertirlos a strings */
    

const VerAlumnos = () => {
    listaAlumnosUI.innerHTML = '';

    arrayAlumnos = JSON.parse(localStorage.getItem('lista'));

    if (arrayAlumnos === null){
        arrayAlumnos = [];
    }else{

        arrayAlumnos.forEach(element => {
            listaAlumnosUI.innerHTML += `<div class="alert alert-primary d-flex justify-content-evenly align-items-center  flex-wrap" role="alert"><i class="fas fa-users me-3"></i><b>${element.nombre}</b><span class="d-flex"><i class="fas fa-user-edit me-4">edit</i><i class="fas fa-user-minus me-0">delete</i></span></div>`
        });
    }
}
const Eliminar = (nombre) => {
    let indexArray;
    arrayAlumnos.forEach((elemento, index) => {
        if(elemento.nombre === nombre){
            indexArray  = index;
        }
    });
    arrayAlumnos.splice(indexArray,1);
    GuardarAlumno();
}
/*   let indexAlumnos;
    arrayAlumnos.forEach((elemento,index) => {
        if(elemento.lista === listaAlumnos){
            indexAlumnos = index;
        }
    }); */

    
//EventListener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let listaUI = document.querySelector('#names').value;

    CrearAlumno(listaUI);

    formularioUI.reset(); //nos permite resetar el formulario cada vez que damos enter o click es decir se limpia el campo del formulario

    GuardarAlumno();

});

document.addEventListener('DOMContentLoaded', VerAlumnos)

listaAlumnosUI.addEventListener('click', (e) => {
    
    e.preventDefault(); 

/*     console.log(e.path[2].childNodes[1].innerHTML); 
    console.log(e.target.innerHTML) */
    //.path[0].childNodes[1].innerHTML

    if(e.target.innerHTML === 'edit' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'delete'){
            Eliminar(texto)
        }
        if(e.target.innerHTML === 'edit'){

        }
    } 
}); 