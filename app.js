let input = document.getElementById("input");
let button = document.getElementById("btn");
let parentNode = document.getElementById('list');
let todos = []
window.onload = () => {
    todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach((todo) => {
        addTodo(todo)
    });
}
button.addEventListener('click', () => {
    if (!input.value) {
        alert('do not empty')
    }
    else {
        todos.push(input.value);
        localStorage.setItem("todos",JSON.stringify(todos))
        addTodo(input.value)
        input.value = ""
    }
})
function addTodo(todo) {
    let para = document.createElement('p');
    parentNode.appendChild(para);
    para.innerText = todo;
    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through"
        remove(todo)
    })
    para.addEventListener("dblclick", () => {
        parentNode.removeChild(para);
        remove(todo)
    })
}
function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index,1)
    }
    localStorage.setItem("todos",JSON.stringify(todos))
}

