import { VerificadorPalindromo } from './verificadorPalindromo.js';

const palabraInput = document.getElementById('palabraInput');
const verificarPalindromoBtn = document.getElementById('verificarPalindromo');
const resultadoContainer = document.getElementById('resultado-container');

const formatoLista = [];

verificarPalindromoBtn.addEventListener('click', () => {
    const palabra = palabraInput.value.toLowerCase();
    const verificador = new VerificadorPalindromo();
    const esPalindromo = verificador.esPalindromo(palabra);

    formatoLista.push(esPalindromo);

    if (esPalindromo) {
        resultadoContainer.textContent = `La palabra "${palabra}" es un palíndromo.`;
    } else {
        resultadoContainer.textContent = `La palabra "${palabra}" no es un palíndromo.`;
    }
});
