var wordArray = ["bird", "bird dog", "humming bird", "dog"]

function oneWordOnly(words) {
    const final = []
for(var i = 0; i < words.length; i++) {
    const splitWords = words[i].split(" ")
    if (splitWords.length < 2) {
    console.log(words[i])   
final.push(words[i])
    }
}
return final
}
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"]))