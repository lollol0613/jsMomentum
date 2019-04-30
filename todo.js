const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos =[];

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        //loadedToDos exists
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDos(toDo.text);
        });
    }
}
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id != parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDo();
}
function paintToDos(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;

    span.innerText = text;
    delBtn.innerText = "Del";
    delBtn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDo();
}
function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();