const todosList = [];
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");

const renderList = () => {
  todoList.innerHTML = "";
  let content = "";

  todosList.map((todo) => {
    const ul = `
  <li>
  <input type="checkbox" id="${todo.id}" onchange="updateStatus(${todo.id})" ${
      todo.status ? "checked" : ""
    }>
  <span>${todo.text}</span>
  <button onclick="deleteTodo(${todo.id})" ${
      !todo.status ? "disabled" : ""
    }>Delete</button>
  </li>
  `;
    content += ul;
  });

  todoList.innerHTML = content;
};

const updateStatus = (id) => {
  const todo = todosList.find((todo) => todo.id === id);
  if (todo) {
    todo.status = !todo.status;
    renderList();
  }
};

const deleteTodo = (id) => {
  todosList = todosList.filter((todo) => todo.id !== id);
  renderList();
};

todoForm.addEventListener("submit", (e) => {
  const field = document.getElementById("todoInput");
  e.preventDefault();

  const newTodo = {
    id: Date.now(),
    date: new Date(),
    text: field.value,
    status: false,
  };

  field.value = "";
  todosList.push(newTodo);
  renderList();
});
