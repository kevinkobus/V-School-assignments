var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    const newArr = []
    arr.forEach(function (person) {
        if (person.age > 18) {
            newArr.push(person)
        }
    })
    // return newArr
    newArr.sort(function (a, b) {
        if (a.lastName > b.lastName) {
            return 1
        }
        else return -1
    })
    // return newArr

    const result = newArr.reduce(function (final, people) {
        final.push("<li>" + people.firstName + " " + people.lastName + " is " + people.age + "</li>")
        return final
    }, [])
    return result
}

console.log(sortedOfAge(peopleArray))

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/