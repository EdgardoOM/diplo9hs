const alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez',
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
  ];

const aprobadosLista = document.querySelector('.aprobadosAlumnos ul'),
  desaprobadosLista = document.querySelector('.desaprobadosAlumnos ul'),
  totalLista = document.querySelector('.totalAlumnos ul');

const alumnosAprobados = alumnos.filter(alum => alum.nota > 6);

const alumnosDesaprobados = alumnos.filter(alumno => alumno.nota < 7);

alumnos.forEach(alumno => {
    const li = document.createElement('li');

    totalLista.appendChild(li);

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    p1.textContent = alumno.nombre;
    p2.textContent = alumno.nota;

    const nuevoLi = totalLista.lastElementChild;

    nuevoLi.appendChild(p1);
    nuevoLi.appendChild(p2);
});

alumnosAprobados.forEach(alumno => {
    const li = document.createElement('li');

    aprobadosLista.appendChild(li);

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    p1.textContent = alumno.nombre;
    p2.textContent = alumno.nota;

    const nuevoLi = aprobadosLista.lastElementChild;

    nuevoLi.appendChild(p1);
    nuevoLi.appendChild(p2);
});

alumnosDesaprobados.forEach(alumno => {
    const li = document.createElement('li');

    desaprobadosLista.appendChild(li);

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    p1.textContent = alumno.nombre;
    p2.textContent = alumno.nota;

    const nuevoLi = desaprobadosLista.lastElementChild;

    nuevoLi.appendChild(p1);
    nuevoLi.appendChild(p2);
});