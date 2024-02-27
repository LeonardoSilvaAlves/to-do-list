function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;
    if (taskText.trim() !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function() {
            li.classList.toggle("completed");
        };
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Deletar";
        deleteButton.onclick = function() {
            ul.removeChild(li);
        };
        var editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = function() {
            var newText = prompt("Editar tarefa:", li.textContent);
            if (newText !== null && newText.trim() !== "") {
                li.textContent = newText;
            }
        };
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Por favor, insira uma tarefa!");
    }
}

function toggleDarkMode() {
    var container = document.getElementById("container");
    container.classList.toggle("dark-mode");
}
