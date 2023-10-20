const title = document.querySelector("#todoTitle");
const text = document.querySelector("#todoText");
const formData = {};
for (let input of [title, text]) {
  input.addEventListener("input", function ({ target }) {
    const { name, value } = target;
    formData[name] = value;
  });
}
const container = document.querySelector(".todos");
const button = document.querySelector(".submit");
button.addEventListener("click", function (event) {
  const element = document.createElement("div");
  element.classList.add("todo");
  container.prepend(element);
  const divtodo = document.querySelector(".todo");
  divtodo.innerHTML = `<h2>${formData.title}</h2><p>${formData.text}</p>`;
  this.value = "";
  const deleted = document.createElement("button");
  deleted.classList.add("delete");
  deleted.innerText = "Delete";
  divtodo.append(deleted);
  event.preventDefault();
  const del = document.querySelectorAll(".delete");
  del.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const block = event.target.closest(".todo");
      block.remove();
    });
  });
});
