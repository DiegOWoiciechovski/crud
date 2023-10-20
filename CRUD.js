var database = firebase.database();
function enviar(){
    var usuario = document.getElementById().user;
    var email = document.getElementById(). email;
    var senha = document.getElementById(). password;
    var filme = document.getElementById(). movie;
    var musica = document.getElementById(). music;

    database.ref('usuario/+ usuario').set({usuario:usuario,email,senha,filme,musica})
    alert ("informações válidas");
}