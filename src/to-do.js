const textInput = document.querySelector("#textInput")
const addBtn = document.querySelector("#addBtn")
const doneCounter = document.querySelector("#doneCounter")
const listCounter = document.querySelector("#listCounter")
const taskLists = document.querySelector("#taskLists")

addBtn.addEventListener("click", () => {
  if (textInput.value.trim()) {
    taskLists.append(createListUi(textInput.value))
    textInput.value = null;
    listAddCounter();

  } else {
    alert("please input some text")
  }
})

const createListUi = (text) => {
  const list = document.createElement("div")
  list.classList.add("tasklist")
  list.innerHTML = `
    <div class="flex justify-between items-center border-2 border-black p-5 mb-3 rounded">
    <div class="text-box flex  items-center">
      <input type="checkbox" class="check-box w-5 h-5" />
      <p class="tasklist-text ms-2">${text}</p>
    </div>
    <div class="">
      <button class="list-edit-btn border-black border p-2 rounded" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          class="w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <button class="list-del-btn border-black border p-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          class="w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  </div>
    `
  const listDelete = list.querySelector(".list-del-btn")
  listDelete.onclick = () => {
    if (confirm("are you sure to delete?")) {
      list.remove();
    }
    listAddCounter();
    listDoneCounter();
  }

  const listEdit = list.querySelector(".list-edit-btn")
  listEdit.onclick = () => {
    const taskListText = list.querySelector(".tasklist-text")
    const input = document.createElement("input")
    input.classList.add("border", "border-black", "p-1", "rounded");
    input.value = taskListText.innerText;

    let hello = taskListText.innerText;

    taskListText.innerText = null;
    taskListText.append(input)

    input.addEventListener("blur", () => {
      if (input.value.trim()) {
        taskListText.innerText = input.value;
      } else {
        alert("please correct word")
        input.classList.remove("border", "border-black", "p-1", "rounded")
        input.value = hello
      }
    });
  }

  // const textBox = document.querySelector(".text-box")
  // textBox.onclick = () => {
  //   textBox.querySelector("input").toggleAttribute("checked")
  //   textBox.querySelector(".tasklist-task").classList.toggle("line-through")
  // }

  // textBox.addEventListener("click", () => {
  //   textBox.querySelector("input").toggleAttribute("checked");
  //   textBox.querySelector(".tasklist-text").classList.toggle("line-through");
  //   list.classList.toggle("bg-gray-200")
  //   listDoneCounter();

  // });

  const textBox = list.querySelector(".text-box");
  const input = textBox.querySelector("input")
  const textLineThrough = textBox.querySelector("p")
  input.addEventListener("click", () => {
    input.toggleAttribute("checked")
    textLineThrough.classList.toggle("line-through")
    list.classList.toggle("bg-gray-200")
    listDoneCounter();
  })

  return list;
}


const listAddCounter = () => {
  listCounter.innerText = document.querySelectorAll(".tasklist").length
}

const listDoneCounter = () => {
  doneCounter.innerText = document.querySelectorAll(".tasklist [type = 'checkbox']:checked").length
}