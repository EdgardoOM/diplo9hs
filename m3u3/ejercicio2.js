const numeros = [200, 500, 7, 9, 10];
let mayor = numeros[0];

for (i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor){
        mayor = numeros[i];
    };
};

console.log(`El mayor de los números del arreglo es ${mayor}`);