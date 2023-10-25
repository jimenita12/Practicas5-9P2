export class VerificadorPalindromo {
    esPalindromo(palabra) {

        palabra = palabra.trim().replace(/\s/g, '').toLowerCase();
        
        const palabraInvertida = palabra.split('').reverse().join('');

        return palabra === palabraInvertida;
    }
}
