export class InversorPalabra {
    invertir(palabra) {
        const palabraInvertida = palabra.split('').reverse().join('');
        return palabraInvertida;
    }
}
