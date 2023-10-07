const main = document.createElement("main")
const heading = document.createElement("h1")
const para = document.createElement("p")
const textInput = document.createElement("input")
const btn = document.createElement("button")
const container = document.createElement("div")



main.classList.add("bg-gray-100", "m-10", "shadow-lg", "p-5")

container.classList.add("mb-5")

heading.innerText = 'List Builder'
heading.classList.add("font-bold", "font-serif", "text-3xl", "mb-4")


para.classList.add("text-stone-600", "mb-4")
para.innerText = "Hello this is to do list"



textInput.classList.add("p-3", "outline-none", "w-4/5")



btn.classList.add("bg-gray-300", "p-3", "rounded", "font-semibold", "w-1/5")
btn.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M12 4.5v15m7.5-7.5h-15"
/>
</svg>`

const lists = document.createElement("ul")

const createList = (listContent) => {
    const list = document.createElement("li")
    list.classList.add(
        "bg-indigo-100",
        "p-2",
        "border-l-4",
        "border-indigo-500",
        "mb-3")
    list.innerText = listContent;
    return list;
}

lists.append(createList("hello bro"))
lists.append(createList("YO what up!"))
lists.append(createList("my man"))




document.body.append(main)
main.append(heading)
main.append(para)
main.append(container)
container.append(textInput, btn)
main.append(lists)
