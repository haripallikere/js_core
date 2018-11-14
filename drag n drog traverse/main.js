var listItems = document.querySelector('.list-items');
var input = document.querySelector('.drag-list')
var add = document.querySelector('.add')
var dragFirst;
var liItems;
var data = [];

function addItems() {
    if (!input.value) return;
    var list = input.value
    data.push(list);
    input.value = "";

    display();
}

function display() {
    listItems.innerHTML = data.map((v, i) => {
        return `
            <li class = "li-items" id="${i}" draggable=true>${v}</li>
            `;
    }).join('');
    var liItems = document.querySelectorAll('.li-items')
    liItems.forEach(v => { 
    v.addEventListener('dragstart', dragStart);
    v.addEventListener("dragover", dragOver);
    v.addEventListener("drop", drop);
    return false;
});
}

// function drag(e) {
//     if (e.target.classlist.contains('li-items') 
// }
// var liItems = document.querySelectorAll('.li-items')
// liItems.forEach(v => { 
//     v.addEventListener('dragstart', dragStart);
//     v.addEventListener("dragover", dragOver);
//     v.addEventListener("drop", drop);
//     return false;
// });


function dragStart(event) {
    dragFirst = event.target;
    event.dataTransfer.dropEffect = "copy";
    event.dataTransfer.setData('text/html',event.target.innerHTML);
}

function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function drop(event) {
    event.preventDefault();
    if (dragFirst !== event.target) {
        dragFirst.innerHTML = event.target.innerHTML
        event.target.innerHTML = event.dataTransfer.getData('text/html');
    }
}
display();

// event listerners
add.addEventListener('click',addItems)
