// Change the background color of box1 to 'orange'

document.getElementById('box1').style.backgroundColor = "orange";

// set the font size in box1s to 44px
document.getElementById('box1s').style.fontSize = '44px';


// shrink box2 by half
document.getElementById('box2').style.width = '125px';


// double the size of box2s
document.getElementById('box2s').style.width = '500px';

// put a circle in the middle of box3 use the class named 'circle' you need to add <div class="circle"></div> in the innerHTML of the box
// **using .innerHTML**
var box3 = document.querySelector('#box3');
var elemen = '<div class="circle"></div>';
var circle = document.createElement('div');
circle.innerHTML = elemen;
box3.appendChild(circle); 


// **using .appendChild()**
var box3 = document.querySelector('#box3');
var circle = document.createElement('div')
circle.classList.add('circle');
box3.appendChild(circle);


//remove the circle from box3s
// **using .innerHTML**


// **using .removeChild()**


// write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done".
// var remov = document.querySelector('#box5');
// remov.querySelectorAll('done')
var remov = document.querySelectorAll('#box5 li'); 
function clearFinished() {
        i = 0
        while (i < remov.length) {
            if (remov[i].classList.contains('done')) {
                remov[i].style.display = 'none';
            }
            i++;
        }
    }



//write a function for #box5 that takes all the completed chores and moves them to #box5s
var box5list = document.querySelectorAll('#box5 li');
var box5s = document.querySelector('#box5s');
function appendTONew() {
    i = 0
    while (i < box5list.length) {
        if (box5list[i].classList.contains('done')) {
            box5s.appendChild(box5list[i]);
        }
        i++;
    }
}



// write a function called addChore that adds a new item to the list of chores, giving it the class "undone."

  //do this task using the .appendChild() or innerHTML
    var input = prompt('enter the item name');
    var NewItem = document.querySelector('#box5');
    function addChore() {
        
    }
    


//reverse the text in #box6
var parasix = document.querySelector('#box6 p');
var reverse = parasix.textContent
reverse = reverse.split('').reverse().join('');
parasix.textContent = reverse

// put <em></em> tags around the word "keep" in #box6s

 var box6s = document.querySelector('#box6s p');
 var para = box6s.textContent;
 var arr = para.split(' ');
    for (i = 0; i<arr.length; i++) {
        if(arr[i] == 'keep') {
            arr[i] = `<em>${arr[i]}</em>`
        }
    }
para = arr.join(' ');
box6s.innerHTML = para;
