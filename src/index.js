import "./styles.css"

const navContainer = document.querySelector(".nav-container")

navContainer.addEventListener("click", () => {
    toggleProjects()
})

  function toggleProjects() {
    const allTasks = document.querySelector(".all-tasks")

    if (allTasks.style.visibility == "visible") { 
        allTasks.style.visibility = "hidden"
        allTasks.style.opacity = "0"
        allTasks.style.transition = "200ms"
    } else {
        allTasks.style.visibility = "visible"
        allTasks.style.transition = "200ms"
        allTasks.style.opacity = "1"

    }
  }


