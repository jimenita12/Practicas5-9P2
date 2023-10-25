import { Pila } from './pilas.js';

export function sumarNumerosGrandes(num1, num2) 
{
    const pila1 = new Pila();
    const pila2 = new Pila();
    const pilaResultado = new Pila();
    let acarreo = 0;

    for (const digito of num1) 
    {
        pila1.push(parseInt(digito, 10));
    }

    for (const digito of num2) 
    {
        pila2.push(parseInt(digito, 10));
    }

    while (!pila1.estaVacia() || !pila2.estaVacia() || acarreo > 0) 
    {
        const digito1 = pila1.pop() || 0;
        const digito2 = pila2.pop() || 0;
        const suma = digito1 + digito2 + acarreo;
        acarreo = Math.floor(suma / 10);
        pilaResultado.push(suma % 10);
    }

    let resultado = '';
    
    while (!pilaResultado.estaVacia()) 
    {
        resultado += pilaResultado.pop();
    }

    return resultado;
}
