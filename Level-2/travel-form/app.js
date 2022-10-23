const form = document.airlineForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
  
const dietNeeds = []

      for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietNeeds.push(form.diet[i].value)
        }
      }
    const first = form.firstName.value
    const last = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.travelLocation.value      

 alert ("First Name: " + first + "\nLast Name: " + last + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDietary preferences: " + dietNeeds)
})