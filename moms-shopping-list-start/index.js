const form = document.addItem

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const itemName = form.title.value
    form.title.value = ""

    const ul = document.getElementById("list")
    const newItem = document.createElement("div")
    const newLi = document.createElement("li")
    const btn = document.createElement("button")

    ul.append(newItem)
    newItem.append(newLi)
    newLi.append(btn)

    btn.innerHTML = "x"
    newLi.innerHTML = itemName
})