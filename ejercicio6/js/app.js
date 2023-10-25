import { InversorPalabra } from "./inversorPalabras.js";

const palabraInput = document.getElementById('palabraInput');
const invertirPalabraBtn = document.getElementById('invertirPalabra');
const resultadoContainer = document.getElementById('resultado-container');

const listaPalabras=[];

// Manejador de clic para el botón de invertir palabra
invertirPalabraBtn.addEventListener('click', () => {
    const palabra = palabraInput.value.trim();
    const inversor = new InversorPalabra();
    const palabraInvertida = inversor.invertir(palabra);

    listaPalabras.push({ original: palabra, invertida: palabraInvertida });

    actualizarLista();
    
    palabraInput.value="";
});

function actualizarLista(){
    resultadoContainer.innerHTML=" ";

    listaPalabras.forEach((palabraLi, index) =>{
        const elemento = document.createElement('divLista');
        elemento.textContent = `Palabra original ${index + 1}: ${palabraLi.original}, Invertida: ${palabraLi.invertida}`;
        resultadoContainer.appendChild(elemento);
    })
}
