const goombaPrice = 5
const bobombPrice = 7
const cheepcheepPrice = 11


const getTotals = document.mariosForm
getTotals.addEventListener("submit", function (event) {
    event.preventDefault()

    const goombaTotal = getTotals.goombaTotal.valueAsNumber
    const bobombTotal = getTotals.bobombTotal.valueAsNumber
    const cheepcheepTotal = getTotals.cheepcheepTotal.valueAsNumber

    getTotals.goombaTotal.value = ""
    getTotals.bobombTotal.value = ""
    getTotals.cheepcheepTotal.value = ""

    let goombaResult = goombaTotal * goombaPrice
    let bobombResult = bobombTotal * bobombPrice
    let cheepcheepResult = cheepcheepTotal * cheepcheepPrice
    let baddieTotal = goombaResult + bobombResult + cheepcheepResult

    const goombaDiv = document.createElement("div")
    goombaDiv.textContent = goombaResult
    document.getElementById("totalG").appendChild(goombaDiv)

    const bobombDiv = document.createElement("div")
    bobombDiv.textContent = bobombResult
    document.getElementById("totalB").appendChild(bobombDiv)

    const cheepcheepDiv = document.createElement("div")
    cheepcheepDiv.textContent = cheepcheepResult
    document.getElementById("totalC").appendChild(cheepcheepDiv)

    const baddieDiv = document.createElement("div")
    baddieDiv.textContent = baddieTotal
    document.getElementById("grandTotal").appendChild(baddieDiv)
})