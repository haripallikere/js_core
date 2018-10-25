var add = document.querySelector('button');
var input = document.querySelector('.enter');
var bookList = document.querySelector('#book-list ul');
var searchText = document.querySelector('.search');
var searchList = document.getElementById('search-books');
var deleteButtons;
var hideYourBook = document.getElementById('hide');
var arr = JSON.parse(localStorage.getItem('arr')) || [];

function addTo(e) {
    e.preventDefault();
    if (!input.value) return;
    var items = input.value;
    arr.push(items)
    input.value = ' ';
    displayElement(arr,bookList);
}

function displayElement(book = [],bookList) {
    // to avoid repeating array element
    bookList.innerHTML = ' ';
    // append html elements to ul after looping
    book.map((element, index) => {
        // create element li and del button
        let li = document.createElement('li');
        let delButton = document.createElement('button');
        delButton.classList.add('del');
        delButton.setAttribute('data-id', index);
        delButton.innerText = 'X';
        li.innerText = element;
        li.appendChild(delButton);
        bookList.appendChild(li);
    });
    deleteButtons = document.querySelectorAll('.del');
    deleteButtons.forEach(node => {
        node.addEventListener('click', del);
    });
    localStorage.setItem('arr', JSON.stringify(arr));
}
function del(event) {
    arr.splice(event.target.dataset.id, 1);
    displayElement(arr,bookList);
}

function enter(event) {
    if (event.keyCode === 13) {
        addTo();
    }
}
function enter(event) {
    if (event.keyCode === 13) {
        search();
    }
}
hideYourBook.addEventListener('click', function (event) {
    if (event.target.checked == true) {

        bookList.style.display = 'none';
    }
    else {
        bookList.style.display = 'block';
    }
});
displayElement(arr,bookList);

function searchItem(e) {
    var filteredArr = arr.filter(v => v.toLowerCase().includes(e.target.value.toLowerCase()));
   displayElement(filteredArr,bookList);
    if(!e.target.value) {
        displayElement(arr,bookList)
    }
}

searchText.addEventListener('keydown', searchItem)
add.addEventListener('click', addTo)
input.addEventListener('keydown', enter)