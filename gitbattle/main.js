var battleBtn = document.querySelector(".battleBtn");
var battle = document.querySelector("#battleProfile");

// playerOne
var player1 = document.querySelector("#player1_form");
var player1btn = document.querySelector(".player1_btn");
var userP1 = document.querySelector("#userProfile1");
var player1form = document.querySelector("#player1");
// playerTwo
var player2 = document.querySelector("#player2_form");
var player2btn = document.querySelector(".player2_btn");
var userP2 = document.querySelector("#userProfile2");
var player2form = document.querySelector("#player2");
var p1;
var p2;


// playerone
var user1Data;
function fetchData(user1) {
    return new Promise((res,rej) => {
        var a = new XMLHttpRequest();
        a.open('GET',`https://api.github.com/users/${user1}`);
        a.onload = () => res(a);
        a.onerror = () => rej("error!");
        a.send();
    })
}

function button1(e) {
    e.preventDefault();
    var user1 = player1.value;
    fetchData(user1).then(
        d =>{ 
        user1Data = JSON.parse(d.response);
        // console.log(d);
        bar1(user1Data)
        // playerOne = d.response;  
        });
}

function bar1(user1Data){
    userP1.innerHTML = `
    <h2> ${user1Data.name}<h2>
    <img src="${user1Data.avatar_url}">
    <p>FOLLOWERS : ${user1Data.followers}</p>
    <p class="repo">Repos: ${user1Data.public_repos}</p>
    <p> Score:${(user1Data.public_repos)*3 + (user1Data.followers)*2}</p>`;
}
// playerTwo
var user2Data;
function fetchData(user2) {
    return new Promise((res,rej) => {
        var a = new XMLHttpRequest();
        a.open('GET',`https://api.github.com/users/${user2}`);
        a.onload = () => res(a);
        a.onerror = () => rej("error!");
        a.send();
    })

}

function button2(e) {
    e.preventDefault();
    var user2 = player2.value;
    fetchData(user2).then(
        d =>{ 
        user2Data = JSON.parse(d.response);
        // console.log(d);
        bar2(user2Data)
        // playerTwo = d.response;
        });
}

function bar2(user2Data){
    userP2.innerHTML = `
    <h2> ${user2Data.name}</h2>
    <img src="${user2Data.avatar_url}">
    <p>FOLLOWERS : ${user2Data.followers}</p>
    <p class="repo"> Repos: ${user2Data.public_repos}</p>
    <p>Score: ${(user2Data.public_repos)*3 + (user2Data.followers)*2}</p>`;
}

// battlefield
function battleField() {
    console.log(user1Data, user2Data, typeof user1Data, typeof user2data)
    p1 = (user1Data.public_repos)*3 + (user1Data.followers)*2;
    p2 = (user2Data.public_repos)*3 + (user2Data.followers)*2;
    
    if (p1 > p2) {
       battle.innerHTML =
       `<h3> ${user1Data.name} is the winner` ;
    }else {
        battle.innerHTML = 
        `<h3> ${user2Data.name} is the winner`
    }
}


// playerOne event
player1btn.addEventListener('click',(e)=>
    {
    button1(e)
});
player1form.addEventListener('submit',(e)=>{
    e.preventDefault();
    button1(e)
})

// playerTwo event
player2btn.addEventListener('click',(e)=>
    {
    button2(e)
});
player2form.addEventListener('submit',(e)=>{
    e.preventDefault();
    button2(e)
})

// battle event
battleBtn.addEventListener('click',battleField)