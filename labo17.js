function mostrarMensaje(){
    alert("Hola, eres bienvenido...!");
}

function valido(){
    let nombre=document.getElementById("nombre").value;
    let correo=document.getElementById("email").value;

    if(nombre=="" || correo==""){
        alert("Todos los campos deben estar diligenciados...!");
        return false;
    }
    return true;

}