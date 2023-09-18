for (var i = 1; i <= 100; i++) {
  
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log("fizz")
    }
    else if (i % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(i)
    }
}  
    const nums = []
    const numArr = nums.push(i)
    
    // console.log(nums)

    let fizzCount = 0
    let buzzCount = 0     
    let fizzBuzzCount = 0
      
 nums.forEach(element => {
   if (element === "fizz") {
     fizzCount =+ 1
   }
     if (element === "buzz") {
     buzzCount =+ 1
   }  
     if (element === "fizzbuzz") {
     fizzBuzzCount =+ 1 
   }
 }) 

 console.log("fizz: " + fizzCount, "buzz: " + buzzCount, "fizzbuzz: " + fizzBuzzCount)