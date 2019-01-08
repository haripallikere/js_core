
function ev(element) {
    return document.querySelector(element);
}
window.onpopstate = () =>{
   if(window.location.pathname=="/peter")div.innerHTML = `peter`;
   if(window.location.pathname=="/ray")div.innerHTML = `ray`;
   if(window.location.pathname=="/egon")div.innerHTML = `egon`;
   if(window.location.pathname=="/winston")div.innerHTML = `winston`;
}
var h1 = ev('h1')
ev('.peter').addEventListener('click',peter)
ev('.ray').addEventListener('click',ray)
ev('.egon').addEventListener('click',egon)
ev('.winston').addEventListener('click',winston)

var div = document.querySelector('#root')


function ev(element) {
    return document.querySelector(element);
}

function peter() {
    div.innerHTML = `peter`
    history.pushState({},"peter","peter");
}
function ray() {
    div.innerHTML = `ray`

    history.pushState({},"ray","ray");
}

function egon() {
    div.innerHTML = `egon`

    history.pushState({},"egon","egon")
}
function winston() {
    div.innerHTML = `winston`

    history.pushState({},"winston","winston")
}

// addEventListener.a