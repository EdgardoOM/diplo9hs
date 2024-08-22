const distancia = parseInt(prompt('Ingrese la distancia a recorrer (en metros)', ''));

if (distancia <= 1000) {
    console.log(`Usted va a recorrer la distancia de ${distancia} metros a pie`);
} else if (distancia <= 10000) {
    console.log(`Usted va a recorrer la distancia de ${distancia} metros en bicicleta`);
} else if (distancia <= 30000) {
    console.log(`Usted va a recorrer la distancia de ${distancia} metros en colectivo`);
} else if (distancia <= 100000) {
    console.log(`Usted va a recorrer la distancia de ${distancia} metros en auto`);
} else {
    console.log(`Usted va a recorrer la distancia de ${distancia} metros en avión`);
};