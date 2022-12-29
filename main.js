let html = document.querySelector('.contenedorHtml');
let css = document.querySelector('.contenedorCss');
let javascript = document.querySelector('.contenedorJavascript');
let body = document.querySelector('main');

html.addEventListener("click", () => {
    body.style.background = "linear-gradient(90deg, orangered, orange)"
});

css.addEventListener("click", () => {
    body.style.background = "linear-gradient(90deg, darkblue, rgb(0,174, 255))"
});

javascript.addEventListener("click", () => {
    body.style.background = "linear-gradient(90deg, yellow, #23242a)"
});

let botonCierre = document.querySelector('.botonCierre');
let botonAbrir = document.querySelector('.botonHeader');
let modal = document.querySelector('.fondoBlanco');
let headeer = document.querySelector('header')
let todo = document.querySelector('.contenedorImagenesBody')

botonCierre.addEventListener("click", () => {
    modal.style.visibility = "hidden"
    todo.style.filter = "blur(0px)"
    headeer.style.filter = "blur(0px)"
});

botonAbrir.addEventListener("click", () => {
    modal.style.visibility = "visible"
    todo.style.filter = "blur(8px)"
    headeer.style.filter = "blur(8px)"
});