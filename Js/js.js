function createTodolist() {
  var noteText = document.getElementById("todoInput").value;
}
if (todoInput !== "") {
  var note = document.createElement("li");
}
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.addEventListener("change", function () {
  if (this.checked) {
    note.classList.add("completed");
    deleteButton.disabled = false;
  } else {
    note.classList.remove("completed");
    deleteButton.disabled = true;
  }
});

var noteTextElement = document.createElement("span");
noteTextElement.innerText = todoInput;

var deleteButton = document.createElement("button");
deleteButton.innerText = "Видалити";
deleteButton.disabled = true;
deleteButton.addEventListener("click", function () {
  note.remove();
});

note.appendChild(checkbox);
note.appendChild(noteTextElement);
note.appendChild(deleteButton);

document.getElementById("todoList").appendChild(note);

document.ge;
