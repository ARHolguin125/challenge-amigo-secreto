// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaro la variable donde se irán agregando los amigos que el usuario irá ingresando
let amigos = []; 


/* Esta función nos permite tomar el valor que ingrese el usuario, verificar que sea un valor válido
y agregarlo a la lista */
function agregarAmigo() {
    //aquí guardamos en la variable el valor que ingresó el usuario
    let amigoAgregado = document.getElementById('amigo').value; 
    console.log(amigoAgregado); 
    if (amigoAgregado === "") {
        alert ("Por favor, inserte un nombre"); 
    }
        else {
            //agrega el nuevo valor al array
            amigos.push(amigoAgregado);
            //limpia la caja de texto al presionar el botón añadir
            document.getElementById('amigo').value = ""; 
        }
}

console.log(amigos);