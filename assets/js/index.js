"use strict";

/*const item = document.getElementById("item");
const counterContainerElem = document.getElementById("counter");
const button = document.getElementsByTagName("button")[0];
let deg = 1;

setInterval(function () {
    deg = deg === 360?1:++deg;
    item.style.transform = `rotate(${deg++}deg)`;
}, 20);

const user = {
    name:"name",
    surname:"surname",
    age: 54,
    isMale: false,
    contacts: undefined, // json will ignore it
    [Symbol("description")]: "test",
};

const jsonUser = JSON.stringify(user);

const parseUser = JSON.parse(jsonUser);

const users = [];

for (let i = 0; i < 10; i++){
    users.push({
        name:`name${i+1}`,
        surname:`surname${i+1}`,
        age: 54,
        isMale: false,
    })
}





const request = new XMLHttpRequest();

const loadButton = document.getElementById("loadData");

let result = null;

request.onreadystatechange = function(){
    if (this.readyState === 4){
        result = JSON.parse(this.responseText);
    }
};

loadButton.onclick = function () {
    request.open("GET", "./users.json", false);
    request.send();
    console.log(JSON.parse(request.responseText));
};*/

/*functions-generators*/
/*promises*/
const loadUserPromise = new Promise(function (resolve, reject) {
    /*if (Math.random()* 10 > 5){
        resolve("Success");
    }
    request("Error");*/
    fetch('./users.json')
        .then(resolve)
        .catch(reject)
});

loadUserPromise
    .then(loadUsersSuccess)
    .catch(loadUsersError);

function loadUsersSuccess(response) {
    const jsonUsers = response.json();
    console.log( JSON.parse( jsonUsers ) );
}

function loadUsersError(response) {
    const jsonUsers = response.json();
}

