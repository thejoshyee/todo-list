import createBtn from "./createBtn"

const toDoBtn = () => {


    //Create initial TODO button
    createBtn("add-new-task-btn", "Add New Task")
    const addNewTaskBtn = document.querySelector(".add-new-task-btn")
    addNewTaskBtn.addEventListener("click", () => {
        openToDoModal()
    })

    const openToDoModal = () => {
        // Modal
        let modal = document.getElementById("modal-wrapper");
        let span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
        modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }


    // Add task to list function
    function addTask(e) {
        e.preventDefault()
        const task = document.getElementById("task").value
        const taskInputBox = document.getElementById("task")
        const toDosWrapper = document.querySelector(".todos-wrapper")

        

        toDosWrapper.innerHTML += `
            <tr>
                <td class="task-item">
                    ${task}
                </td>
                <td>
                <button class="deleteBtn">X</button>
                </td>
            </tr>
        `

        taskInputBox.value = ""
    }

    // submit the task to the DOM
    const submitTaskBtn = document.getElementById("add-task-btn")
    submitTaskBtn.addEventListener("click", (e) => {
        addTask(e)
    })



}

export default toDoBtn