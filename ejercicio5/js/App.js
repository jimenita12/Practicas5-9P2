import { PalabraLista } from './Palabra.js';

const palabraInput = document.getElementById('palabraInput');
const agregarPalabraBtn = document.getElementById('agregarPalabra');
const listasContainer = document.getElementById('listas-container');

const listas = {};
const todasLasPalabras = [];

function agregarPalabra() {
    const palabra = palabraInput.value.trim();
    if (palabra.length > 0) {
        const primeraLetra = palabra[0].toUpperCase();
        
        if (!listas[primeraLetra]) {
            listas[primeraLetra] = new PalabraLista(primeraLetra);
        }
        
        listas[primeraLetra].agregarPalabra(palabra);
        todasLasPalabras.push(palabra);
        todasLasPalabras.sort();
        palabraInput.value = '';
        
        renderizarListas();
    }
}

function renderizarListas() {
    listasContainer.innerHTML = '';

    todasLasPalabras.sort();

    const letrasOrdenadas = Object.keys(listas).sort();

    const todasLasPalabrasDiv = document.createElement('div');
    todasLasPalabrasDiv.classList.add('lista');
    
    const todasLasPalabrasTitulo = document.createElement('h2');
    todasLasPalabrasTitulo.textContent = 'Todas las palabras';
    todasLasPalabrasDiv.appendChild(todasLasPalabrasTitulo);
    
    const todasLasPalabrasTexto = document.createElement('p');
    todasLasPalabrasTexto.textContent = todasLasPalabras.join(', ');
    todasLasPalabrasDiv.appendChild(todasLasPalabrasTexto);
    
    listasContainer.appendChild(todasLasPalabrasDiv);

    letrasOrdenadas.forEach(letra => {
        listasContainer.appendChild(listas[letra].crearElementoLista());
    });
}

agregarPalabraBtn.addEventListener('click', agregarPalabra);

