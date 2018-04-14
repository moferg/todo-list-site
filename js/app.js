function addToList() {
    // select text input
    var todoItem = document.getElementById("todo-input").value; 
    // create todo list item
    var newTodo = document.createElement("li");
    newTodo.innerText = todoItem;
    // add input data to HTML
    var todoList = document.getElementById("todo-list");
    todoList.appendChild(newTodo);
    // TODO add '-' before new todo's
    // TODO add checkbox after new todo's
    // TODO empty input field on button click

}

function crossOut() {
    // select todo list item
    // add crossout text decoration
}

function deleteFromList() {
    // select todo list item(s) w/ crossout
    // delete to do list item(s)
}