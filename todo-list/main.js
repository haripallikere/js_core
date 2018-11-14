var todoText = document.querySelector('.todo_text');
var addButton = document.querySelector('.add');
var ulElm = document.querySelector('.todo_lists');
var deleteButtons;
// console.log(deleteButtons)
var checkBoxes;
var todoListArray = [];

function addTodo() {
    if (!todoText.value) return;
    var obj = {
        text: todoText.value,
        done: false
    }
    todoListArray.push(obj);
    todoText.value = "";
    displayTodo();
}

function handleEnter(event){
    if(event.keyCode === 13) {
        addTodo();
    }
}

function displayTodo() {
    // ulElm.innerHTML = "";
    while (ulElm.firstChild){
        ulElm.removeChild(ulElm.firstChild)
    }
    todoListArray.forEach((todo, index) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.classList.add("checkbox");
        input.setAttribute('data-id',index);
        var text = document.createElement('p');
        text.innerText = todo.text;
        let delButton = document.createElement('button');
        delButton.classList.add('delete');
        delButton.setAttribute('data-id', index);

        delButton.innerText = 'Delete';
        li.appendChild(input);
        li.appendChild(text);
        li.appendChild(delButton);
        ulElm.appendChild(li);
    })
    deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(node => {
        node.addEventListener('click', deleteTodo);
    });
    checkBoxes = document.querySelectorAll('.checkbox');
    checkBoxes.forEach(node => {
        node.addEventListener('click',function(event) {
            var checked = event.target.dataset.id
            todoListArray[checked].done = !todoListArray[checked].done;
        })
    })
}
function deleteTodo(event){
    todoListArray.splice(event.target.dataset.id, 1);
    displayTodo();
}


// console.log(deleteButtons)
todoText.addEventListener('keydown', handleEnter)
addButton.addEventListener('click', addTodo);