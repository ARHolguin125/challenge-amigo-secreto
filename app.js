// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaro la variable donde se irán agregando los amigos que el usuario irá ingresando
let amigos = []; 


/* Esta función nos permite tomar el valor que ingrese el usuario, verificar que sea un valor válido
y agregarlo al array */
function agregarAmigo() {
    //aquí guardamos en la variable el valor que ingresó el usuario
    let amigoAgregado = document.getElementById('amigo').value; 
    console.log(amigoAgregado); 
    //confirma que el input no esté vacío
    if (amigoAgregado === "") {
        alert ("Por favor, inserte un nombre"); 
    }
        else {
            //agrega el nuevo valor al array
            amigos.push(amigoAgregado);
            //limpia la caja de texto al presionar el botón añadir
            document.getElementById('amigo').value = ""; 
            //llama a la función que agrega el nombre a una lista visible en la interfaz
            agregarAmigosLista();
        }
}

console.log(amigos);

//función que toma los elementos del array y los agrega a una lista
function agregarAmigosLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}