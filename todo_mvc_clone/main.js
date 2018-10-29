// varibale declaration
var todoList = document.querySelector('.todo-list');
var input = document.querySelector('.new-todo');
var form = document.getElementById('form')
var taskDone = document.querySelector('#done')
var editInput = document.querySelector('#editNew')
// var formEdit = document.querySelector('.form-edit')
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
        <li>
          <input type="checkbox" class="check" data-id=${i} id="item${i}" ${v.done ? 'checked' : ''} />
          <label class="editp" for="item${i}">${v.done ? v.name.strike() : v.name}</label>
          <button class="editbutton" data-id=${i}>edit</button>
          <button class="button" data-id=${i}>X</button>
        </li>
      `;
  }).join('');
  localStorage.setItem('dataList', JSON.stringify(data));
}
// delete
function deleteTodo(event) {
  if (event.target.classList.contains('button'))
    data.splice(event.target.dataset.id, 1);
  display(data, todoList);
}
// toggle
function toggle(event) {
  if (event.target.classList.contains('check'))
    var checked = event.target.dataset.id;
  data[checked].done = !data[checked].done;
  // console.log(checked,data[checked].done)
  display(data, todoList);
}
// editt
function edit(event) {
  if (!editInput.value) return;
  if (event.target.classList.contains('editbutton'))
    var classcontain = todoList.querySelector('.editp')
  var editVal = event.target.dataset.id;
  console.log(editVal)
  var editInputh = editInput.value;
  if (classcontain) {
    data[editVal].name = editInputh;
  }
  editInput.value = '';
  display(data, todoList)
}



// completed
// function completed(event) {
//   var 
// }
// event listerners
form.addEventListener('submit', addItem);
todoList.addEventListener('click', toggle)
todoList.addEventListener('click', deleteTodo);
// formEdit.addEventListener('submit',edit)
todoList.addEventListener('click', edit)
taskDone.addEventListener('click', completed);
