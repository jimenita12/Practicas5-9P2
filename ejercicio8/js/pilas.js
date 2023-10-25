export class Pila 
{
    constructor() 
    {
        this.elementos = [];
    }

    push(elemento) 
    {
        this.elementos.push(elemento);
    }

    pop() 
    {
        if (!this.estaVacia()) 
        {
            return this.elementos.pop();
        }
        return null;
    }

    estaVacia() 
    {
        return this.elementos.length === 0;
    }
}
