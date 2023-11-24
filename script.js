const clear = document.querySelector("#clear");
const display = document.querySelector("#display");


clear.addEventListener("click", ()=> {
    display.textContent = "";
});