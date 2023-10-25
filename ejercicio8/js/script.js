import { sumarNumerosGrandes } from './SumarNumero.js';

document.getElementById('sumarBoton').addEventListener('click', function() {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    const resultado = sumarNumerosGrandes(num1, num2);
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
