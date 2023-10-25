export class PalabraLista {
    constructor(primeraLetra) {
        this.primeraLetra = primeraLetra;
        this.palabras = [];
    }
    
    agregarPalabra(palabra) {
        this.palabras.push(palabra);
        this.palabras.sort();
    }
    
    crearElementoLista() {
        const listaDiv = document.createElement('div');
        listaDiv.classList.add('lista');
        
        const listaTitulo = document.createElement('h2');
        listaTitulo.textContent = `Lista ${this.primeraLetra}`;
        listaDiv.appendChild(listaTitulo);
        
        const listaUl = document.createElement('ul');
        this.palabras.forEach(palabra => {
            const listaLi = document.createElement('li');
            listaLi.textContent = palabra;
            listaUl.appendChild(listaLi);
        });
        listaDiv.appendChild(listaUl);
        
        return listaDiv;
    }
}

