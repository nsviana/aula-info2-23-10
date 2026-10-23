let numeros = [10, 12, 14, 7, 5, 11, 8, 20, 6];
// Construir um script JS para
// percorrer um vetor e CONTAR quantos elementos
// desse vetor são maiores que 10

let contador = 0;

for(let i=0; i<numeros.length; i++){
    if(numeros[i]>10){
        contador = contador +1;
    }
}

document.getElementById("valores").textContent = "Valores: " + numeros.join(", ");
document.getElementById("resultado").textContent = "Possui " + contador + " elementos maiores que 10.";
console.log(numeros);
console.log("Possui " + contador + " elementos maiores que 10");
