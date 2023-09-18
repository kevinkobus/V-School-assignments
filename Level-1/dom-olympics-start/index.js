//manipulating the DOM w/o altering HTML but couldn't figure out how to make Kevin a different color

//var header = document.getElementById("header")
// header.textContent = "Javascript Made This!!"
// header.style.textAlign = "center"
// header.style.fontSize = "50px"

// var h2 = document.createElement("h2")
// h2.textContent = "Kevin wrote the Javascript"
// header.append(h2)
// h2.style.fontSize = "35px"

//added h1, h2, and span tags to HTML

var h1 = document.getElementById("h1");
h1.style.textAlign = "center";
h1.style.fontSize = "50px";

var h2 = document.getElementById("h2");
h2.style.textAlign = "center";
h2.style.fontSize = "35px";

var firstName = document.getElementById("first-name");
firstName.style.color = "purple";

var msgs = document.querySelector(".messages");
var msgChild1 = msgs.childNodes[1];

msgChild1.textContent = "There's something funny going on here";

var msgs = document.querySelector(".messages");
var msgChild2 = msgs.childNodes[3];

msgChild2.textContent = "What do you mean?";

var msgs = document.querySelector(".messages");
var msgChild3 = msgs.childNodes[5];

msgChild3.textContent = "I'm surrounded by clowns!";

var msgs = document.querySelector(".messages");
var msgChild4 = msgs.childNodes[7];

msgChild4.textContent = "What kind of clowns?";

// ???Why every other node, are nodes 2,4,6 whitespace???

function fn() {
    document.getElementById("clear-button")
}

function clearContent() {
    msgs.addEventListener("Click", fn())
        msgs.innerHTML = ""
    }

//