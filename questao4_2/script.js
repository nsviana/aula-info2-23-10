let numeros = [10, 12, 14, 7, 5, 11, 8, 20, 6];
// Construir um script JS para
// percorrer um vetor e CONTAR quantos elementos
// desse vetor são maiores que 10

function mostrarValores(){
    let contador = 0;

    let valores = "";

    for(let i=0; i<numeros.length; i++){
        if(numeros[i]>10){
            contador = contador +1;
        }
        valores = valores + numeros[i] + "<br>";
    }

    document.getElementById("valores").innerHTML = valores;
    document.getElementById("resultado").textContent = "Possui " + contador + " elementos maiores que 10.";

}
