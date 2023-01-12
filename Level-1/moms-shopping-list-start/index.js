const form = document.addItem

// function to create and new list item
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const itemName = form.title.value
    form.title.value = ""

    const ul = document.getElementById("list")
    const newItem = document.createElement("div")
    const newLi = document.createElement("li")
    const deleteBtn = document.createElement("button")
    const editBtn = document.createElement("button")

    ul.append(newItem)
    newItem.append(newLi)
    // newLi.className = "space"
    newLi.textContent = itemName
    newLi.append(deleteBtn)
    // deleteBtn.className = "space"
    deleteBtn.textContent = "x"
    deleteBtn.append(editBtn)
    // editBtn.className = "space"
    editBtn.textContent = "edit"

    
    console.log(newItem)
    console.dir(newItem)
    
// function to delete an item from the list    
deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove()
})    

// function to edit an item on the list?

     
})