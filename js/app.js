function addToList() {
    
    // select text input value
    var todoInput = document.getElementById("todo-input").value; 
    
    // create todo list item
    var newTodo = document.createElement("li");
    
    // create checkbox for list item
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    //create label for checkbox
    var label = document.createElement("label");
    label.innerText = " Completed"
   
    // append todo input to list item
    newTodo.innerHTML= "- " + todoInput + " ";
    
    // append checkbox and label to list item
    newTodo.appendChild(checkbox);
    newTodo.appendChild(label);
    
    // append new todo to list
    var todoList = document.getElementById("todo-list");
    todoList.appendChild(newTodo);
}

function crossOut() {

    // select todo list item
    var checkbox = document.getElementById("completed");

    // add crossout text decoration
    checkbox.style.textDecoration = "line-through";
}

function deleteFromList() {
    // select todo list item(s) w/ crossout
    // delete to do list item(s)
}

function checkIfEmpty() {
    // if input field is empty
        // alert the user to enter soemthing in the input
    // else call addToList()
}