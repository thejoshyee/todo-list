//create the button to do
const createBtn = (identifer, text) => {
        const addToDoBtn = document.createElement("button")
        addToDoBtn.setAttribute("class", identifer)
        addToDoBtn.textContent = text
        content.appendChild(addToDoBtn)
        
    return addToDoBtn
}


export default createBtn