const form = document.addItem

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const itemName = form.title.value
    form.title.value = ""

    const ul = document.getElementById("list")
    const newItem = document.createElement("div")
    const newLi = document.createElement("li")
    const deleteBtn = document.createElement("button")

    ul.append(newItem)
    newItem.append(newLi)
    newLi.innerHTML = itemName
    newLi.append(deleteBtn)
    deleteBtn.innerHTML = "x"

    // deleteBtn.addEventListener("click", function (event) {
    //    event.preventDefault()
             
    // })
     
})