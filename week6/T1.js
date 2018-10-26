let tasks = document.querySelector("#tasks");
let div = tasks.querySelectorAll("div");



for(let i = 0; i<div.length; i++){
    let button = div[i].querySelector("button");
    button.addEventListener("click", status);
}


function status(e){
    let button = e.currentTarget;
    let parent = button.parentNode;
    parent.dataset.status = 'done';
}