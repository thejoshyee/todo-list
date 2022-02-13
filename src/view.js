import toDoBtn from "./toDoBtn"

const view = () => {
    //content div
    const content = document.getElementById("content")

    //Header Section
    const title = document.createElement("h1")
    title.setAttribute("class", "title")
    content.appendChild(title)
    title.innerHTML = "To Do List"

    // open modal to add new todo
    toDoBtn()

    //create a border to separate list
    const border = document.createElement("hr")
    border.setAttribute("class", "list-border")
    content.appendChild(border)

    //create an area for todos
    const todosWrapper = document.createElement("div")
    todosWrapper.setAttribute("class", "todos-wrapper")
    content.appendChild(todosWrapper)


}

export default view