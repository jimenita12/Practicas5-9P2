import { Pila } from './pila.js';

const valorNuevoInput = document.getElementById('valorNuevo');
const valorViejoInput = document.getElementById('valorViejo');
const reemplazarBtn = document.getElementById('reemplazar');
const resultadoContainer = document.getElementById('resultado');

const pilaOriginal = new Pila();
pilaOriginal.apilar(1);
pilaOriginal.apilar(2);
pilaOriginal.apilar(3);
pilaOriginal.apilar(4);
pilaOriginal.apilar(3);
pilaOriginal.apilar(5);

function imprimirPilaOriginal(pila){
    const elementos = pila.obtenerElementos();
    elementos.forEach(elemento => {
        const elementoDiv = document.createElement('div');
        elementoDiv.textContent = elemento;
        resultadoContainer.appendChild(elementoDiv);
    });
}

imprimirPilaOriginal(pilaOriginal);

function renderizarPila(pila) {
    resultadoContainer.innerHTML = '';
    const elementos = pila.obtenerElementos();
    elementos.forEach(elemento => {
        const elementoDiv = document.createElement('div');
        elementoDiv.textContent = elemento;
        resultadoContainer.appendChild(elementoDiv);
    });
}

reemplazarBtn.addEventListener('click', () => {
    const valorNuevo = parseInt(valorNuevoInput.value);
    const valorViejo = parseInt(valorViejoInput.value);

    const pilaTemporal = new Pila();

    while (!pilaOriginal.estaVacia()) {
        const elemento = pilaOriginal.desapilar();
        if (elemento === valorViejo) {
            pilaTemporal.apilar(valorNuevo);
        } else {
            pilaTemporal.apilar(elemento);
        }
    }

    while (!pilaTemporal.estaVacia()) {
        pilaOriginal.apilar(pilaTemporal.desapilar());
    }

    renderizarPila(pilaOriginal);
});
