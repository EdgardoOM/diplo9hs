const header = document.querySelector('header'),
    cuadradoUno = document.querySelector('.cuadradoUno'),
    cuadradoDos = document.querySelector('.cuadradoDos'),
    cuadradoTres = document.querySelector('.cuadradoTres');

cuadradoUno.style.backgroundColor = '#da4545';
cuadradoDos.style.backgroundColor = '#45d0da';
cuadradoTres.style.backgroundColor = '#da45ba';

cuadradoUno.addEventListener('click', function(){
    header.style.backgroundColor = cuadradoUno.style.backgroundColor;
});

cuadradoDos.addEventListener('click', function(){
    header.style.backgroundColor = cuadradoDos.style.backgroundColor;
});

cuadradoTres.addEventListener('click', function(){
    header.style.backgroundColor = cuadradoTres.style.backgroundColor;
});