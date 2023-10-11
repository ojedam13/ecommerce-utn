const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListener();

function cargarEventListener() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const elementos = e.target.parentElement.parentElement;
        leerDatosElemento(elementos);
    }
}

function leerDatosElemento(elementos) {
    const infoElemento = {
        imagen: elementos.querySelector('img').src,
        titulo: elementos.querySelector('h3').textContent,
        precio: elementos.querySelector('.precio').textContent,
        id: elementos.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elementos) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elementos.imagen}" width=100>
        </td>
        <td>
            ${elementos.titulo}
        </td>
        <td>
            ${elementos.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elementos.id}">X </a> 
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elementos,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elementos = e.target.parentElement;
        elementoId = elementos.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}