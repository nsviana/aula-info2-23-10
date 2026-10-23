function mostrarValores(){
    let resultado = document.querySelector("li");
    alert(resultado.innerHTML);
}

function mostrarTodosValores(){
    let resultado = document.querySelectorAll("li");

    for(let i=0; i<resultado.length; i++){
        console.log(resultado[i].innerHTML);
    }
}