const divs = document.querySelectorAll('div');

divs.forEach(div => div.addEventListener('click',logText));

function logText(e) {
    // console.log(this.classList.value);
    console.log(this.classList.value);
    e.stopPropagation();
}