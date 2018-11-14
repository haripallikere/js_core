// varibale declaration
var todoList = document.querySelector('.todo_lists');
var input = document.querySelector('.todo_text');
var form = document.getElementById('form');
var clear = document.querySelector('.clear');
var welcome = document.querySelector('.welcome')
var welcom = document.querySelector('.welcom')
var form1 = document.getElementById('form1')
var data = JSON.parse(localStorage.getItem('dataList')) || [];
let userName = localStorage.getItem('userName') || '';

// add input
function addItem(e) {
    e.preventDefault();
    if (!input.value) return;
    const inputList = input.value;
    const item = {
        name: "",
        done: false
    };
    item.name = inputList;
    data.push(item);
    display(data, todoList);
    input.value = "";
}
// display function
function display(data = [], todoList) {
    todoList.innerHTML = data.map((v, i) => {
        return `
        <li class = "li-items" id="${i}">
          <input type="checkbox" class="check" data-id=${i} id="item${i}" ${v.done ? 'checked' : ''} />
          <label class="editp" for="item${i}">${v.done ? v.name.strike() : v.name}</label>
          <button class="editbutton" data-id=${i}>edit</button>
          <button class="bbutton" data-id=${i}>X</button>
        </li>
        `;
    }).join('');
    localStorage.setItem('dataList', JSON.stringify(data));
}
// delete
function deleteTodo(event) {
    if (event.target.classList.contains('NewINput')) {
        return;
    }
    if (event.target.classList.contains('bbutton')) {
        data.splice(event.target.dataset.id, 1);
    }
    display(data, todoList);
}
// toggle
function toggle(event) {
    if (event.target.classList.contains('NewINput')) {
        return;
    }
    if (event.target.classList.contains('check')) {
        var checked = event.target.dataset.id;
    data[checked].done = !(data[checked].done);
    }
    display(data, todoList);
}
// editt
function edit(event) {
    event.preventDefault();
    if (event.target.classList.contains('NewINput')) {
        return;
    }
    var editVal = event.target.dataset.id;
    if (event.target.classList.contains('editbutton')){
        event.preventDefault();
        // data[editVal].name =
        //  `<input type="text" class ="NewINput" id=${editVal} value=${data[editVal].name}>`
        // event.target.parentElement.innerHTML = `<input type="text" class ="NewINput">`;

        // const newValue = event.target.value;
        // data[editVal].name = newValue;
        console.log(editVal)
    }
    display(data, todoList);   
}

function editsave(event) {
    if (event.target.classList.contains('.NewINput')) {
    var editText = document.querySelector('[class=NewINput]');
    index = event.target.id;
    if (event.keyCode == 13) {
        data[index].name = editText.value;
        
    }
} 
    display(data,todoList);
}
// clear
function clearAll(event) {
    data = [];
    display(data, todoList);
}
// welcome
// var welArray = JSON.parse(localStorage.getItem('welcome')) || [];
function welCome() {
    if(localStorage.getItem('userName') === null) {
        const welcomeValue = document.querySelector('.welcom');
        localStorage.setItem('userName', welcomeValue.value);
        welcomeValue.style.display = 'none';
        
    } else {
        welcomeValue.style.display = 'none';

    }
}
// calling the display function 


display(data, todoList);

// event listerners

    form.addEventListener('submit', addItem);
    todoList.addEventListener('click', toggle)
    todoList.addEventListener('click', deleteTodo);
    todoList.addEventListener('click', edit)
    clear.addEventListener('click', clearAll)
    todoList.addEventListener('submit',editsave)
    // form1.addEventListener('submit',welCome)
    




