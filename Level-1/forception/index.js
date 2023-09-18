var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    for (var i = 0; i < people.length; i++) {
        people[i] = people[i] + ":"     
    }
    alphabetArr = alphabet.split("")
    // console.log(alphabetArr)

    var combArr = []
    for (var i = 0; i < people.length; i++) {
      combArr.push(people[i])
      for (var j = 0; j < alphabetArr; j++) {
        combArr.push(alphabettArr[j])
      }
    }
      return combArr
}
console.log(forception(people, alphabet))
