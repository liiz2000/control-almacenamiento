let mensaje = document.getElementById('mensaje');
let email = document.getElementById('email');
let password = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
let boton = document.getElementById('boton');

let leer = document.getElementById('leer');
let registro = document.getElementById('registros');

let valor = "Victor Pinedo";
/* let registro = [
    {
        email: email.value,
        password: password.value,
        checkbox: checkbox.value
    }
]; */
let registros = [];

boton.addEventListener('click', function (e) {

    let elemento =
    {
        email: email.value,
        password: password.value,
        checkbox: checkbox.value
    };

    registros.push(elemento);
    console.log(registros);

    //alert();
    e.preventDefault();
    //localStorage.setItem("Email", email.value);
    //localStorage.setItem("Password", password.value);
    //localStorage.setItem("Checkbox", checkbox.value);

    localStorage.setItem("Registros", JSON.stringify(registros));

});

leer.addEventListener('click', function () {
    registros = JSON.parse(localStorage.getItem("Registros"));

    registros.forEach(function (elemento, indice) {
        console.log(indice + ": " + elemento.email + ", " + elemento.password + ", " + elemento.checkbox);
        registro.innerHTML = registro.innerHTML + indice + ": " + elemento.email + ", " + elemento.password + ", " + elemento.checkbox + "<br>";
    });

});