// varibale declaration
var todoList = document.querySelector('.todo_lists');
var input = document.querySelector('.todo_text');
var form = document.getElementById('form');
var clear = document.querySelector('.clear');
var welcome = document.querySelector('.welcome')
var welcom = document.querySelector('.welcom')
var form1 = document.getElementById('form1')
var data = JSON.parse(localStorage.getItem('dataList')) || [];

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
        <li class = "li-items">
          <input type="checkbox" class="check" data-id=${i} id="item${i}" ${v.done ? 'checked' : ''} />
          <label class="editp" for="item${i}">${v.done ? v.name.strike() : v.name}</label>
        </li>
        <button class="editbutton" data-id=${i}>edit</button>
          <button class="bbutton" data-id=${i}>X</button>`;
    }).join('');
    localStorage.setItem('dataList', JSON.stringify(data));
}
// delete
function deleteTodo(event) {
    if (event.target.classList.contains('bbutton')) {
        data.splice(event.target.dataset.id, 1);
    }
    display(data, todoList);
}
// toggle
function toggle(event) {
    if (event.target.classList.contains('check')) {
        var checked = event.target.dataset.id;
    data[checked].done = !(data[checked].done);
    }
    display(data, todoList);
}
// editt
function edit(event) {
    var editVal = event.target.dataset.id
    // console.log('pop')
    if (event.target.classList.contains('editbutton')){
        data[editVal].name = `<input type="text" class ="NewINput" id=${editVal} value=${data[editVal].name}>`
       
    }
    display(data, todoList);
    
}
function editsave(event) {
    var editText = document.querySelector("[class=NewINput]");
    index = event.target.id
    if (event.keycode == 13) {
        data[index].name = editText.value
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
// function welCome() {
//     var welGret = welcom.value;
//     welArray.push[welGret];
//     if(!)
// }
// calling the display function 
display(data, todoList);

// event listerners
form.addEventListener('submit', addItem);
todoList.addEventListener('click', toggle)
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', edit)
clear.addEventListener('click', clearAll)
// form1.addEventListener('submit',welCome)
todoList.addEventListener('submit',editsave);

