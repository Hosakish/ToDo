const addButton = document.getElementById("addToDo");
const inputField = document.getElementById("input-field");
const toDoContainer = document.getElementById("ToDosContainer");

function buttonClick(){
    toDoContainer.innerHTML += '<div class="to-do-card"><h2>Item X</h2></div>'
}

addButton.addEventListener("click", buttonClick)