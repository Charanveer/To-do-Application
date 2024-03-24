const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function addTask() {
    if (input_box.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = "<span class=\"todo-list\">" + input_box.value + "</span > "
        let span = document.createElement("span");
        span.classList.add('close-btn')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        list_container.appendChild(li);
    }
    input_box.value = "";
    saveData();
}

list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.classList.contains("todo-list")) {
        e.target.parentElement.classList.toggle("checked")
        saveData();
    }
    else if (e.target.classList.contains("close-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list_container.innerHTML);
}
function showTask() {
    list_container.innerHTML = localStorage.getItem("data");
}
showTask();