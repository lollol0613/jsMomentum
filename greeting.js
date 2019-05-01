const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    tdForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    const currentValue = input.value;
    event.preventDefault();
    saveName(currentValue);
    paintGreeting(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_ON);
    tdForm.classList.remove(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    tdForm.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //currentuser doesn't exist.
        askForName();
    } else {
        //currentUser exists.
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();