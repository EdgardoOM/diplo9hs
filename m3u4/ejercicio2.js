const textArea = document.getElementById('textArea'),
    respuesta = document.querySelector('.cantidad');
let cantidad = 0;

textArea.addEventListener('keyup', function(){
    cantidad = textArea.value.length;
    respuesta.textContent = `La cantidad de caracteres es: ${cantidad}`; 
});