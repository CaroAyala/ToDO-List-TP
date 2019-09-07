let newCardAdd = document.getElementById('addButton');

newCardAdd.addEventListener('click', function() {
    let addContainer = document.getElementById('addContainer');

    addContainer.classList.toggle('mostrar');
});

let newCardAddTask = document.getElementById('newCardAdd');

newCardAddTask.addEventListener('click', function() {
    let titulo = document.querySelector('input.new-card-input').value;

    let tarjeta = nuevaCard(titulo);

    let listapendientes = document.getElementById('pendientes');
    apendizando(listapendientes, tarjeta);
});
function nuevaCard(titulo) {
    //primer div
    let primerdiv = document.createElement('div');
    primerdiv.classList.add('task-incompleted');

    //parrafo
    let parrafo1 = document.createElement('p');
    parrafo1.classList.add('task-incompleted-text');
    parrafo1.innerText = titulo;
    apendizando(primerdiv, parrafo1);

    //boton
    let boton1 = document.createElement('button');
    boton1.classList.add('check-button');

    //icono
    let icono1 = document.createElement('i');
    icono1.classList.add('far');
    icono1.classList.add('fa-check-circle');
    icono1.addEventListener('click', tareaRealizada);
    apendizando(boton1, icono1);
    apendizando(primerdiv, boton1);

    //boton
    let boton2 = document.createElement('button');
    boton2.classList.add('trash-button');

    //icono
    let icono2 = document.createElement('i');
    icono2.classList.add('fas');
    icono2.classList.add('fa-trash-alt');
    icono2.addEventListener('click', eliminar);
    apendizando(boton2, icono2);
    apendizando(primerdiv, boton2);

    return primerdiv;
}

function apendizando(padre, hijo) {
    return padre.appendChild(hijo);
}

function tareaRealizada() {
    let padre = this.parentNode.parentNode;
    padre.classList.remove('task-incompleted');
    padre.classList.add('task-completed');
    let listaCompletas = document.getElementById('completadas');
    apendizando(listaCompletas, padre);

    return padre;
}

function eliminar() {
    let padre = this.parentNode.parentNode;
    let padreDelPadre = this.parentNode.parentNode.parentNode;
    return padreDelPadre.removeChild(padre);
}
