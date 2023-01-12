//add form
const formAdd = document["add-form"]
formAdd.addEventListener("submit", function (event) {
    event.preventDefault()

    const add1 = formAdd.add1.valueAsNumber
    const add2 = formAdd.add2.valueAsNumber
    formAdd.add1.value = ""
    formAdd.add2.value = ""

    let addSum = add1 + add2
    // console.log(addSum)

    const div1 = document.createElement("div")
    div1.textContent = addSum
    document.getElementById("addAnswer").appendChild(div1)
})


// subtract form 
const formSub = document["subtract-form"]
formSub.addEventListener("submit", function (event) {
    event.preventDefault()

    const sub1 = formSub.sub1.valueAsNumber
    const sub2 = formSub.sub2.valueAsNumber
    formSub.sub1.value = ""
    formSub.sub2.value = ""

    let subResult = sub1 - sub2
    // console.log(subResult)

    const div2 = document.createElement("div")
    div2.textContent = subResult
    document.getElementById("subAnswer").appendChild(div2)
})

//multiply form  
const formMult = document["multiply-form"]
formMult.addEventListener("submit", function (event) {
    event.preventDefault()

    const mult1 = formMult.mult1.valueAsNumber
    const mult2 = formMult.mult2.valueAsNumber
    formMult.mult1.value = ""
    formMult.mult2.value = ""

    let multResult = mult1 * mult2
    // console.log(multResult)

    const div3 = document.createElement("div")
    div3.textContent = multResult
    document.getElementById("multAnswer").appendChild(div3)
})

//divide form
const formDivide = document["divide-form"]
formDivide.addEventListener("submit", function (event) {
    event.preventDefault()

    const divide1 = formDivide.divide1.valueAsNumber
    const divide2 = formDivide.divide2.valueAsNumber
    formDivide.divide1.value = ""
    formDivide.divide2.value = ""

    let divideResult = divide1 / divide2
    // console.log(divideResult)

    const div4 = document.createElement("div")
    div4.textContent = divideResult
    document.getElementById("divAnswer").appendChild(div4)
})
