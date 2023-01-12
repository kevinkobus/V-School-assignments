// Extra credit
// Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be `https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos`.

// Once you get the data, use `.reduce()` to figure out how many `watchers` you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)
// Note: If you've learned how to use the axios library, you can do this in node. Otherwise, you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest or jQuery's AJAX methods, meaning you'll need an HTML page and an associated script tag for your JavaScript.

const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.github.com/users/kevinkobus/repos", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
    } 
}

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://swapi.py4e.com/api/people/1", true);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const JSONdata = xhr.responseText;
//     const data = JSON.parse(JSONdata);
//     showData(data);
//   }
// };

// function showData(luke) {
//   const h1 = document.createElement("h1");
//   h1.textContent = luke.name;
//   document.body.appendChild(h1);
// }