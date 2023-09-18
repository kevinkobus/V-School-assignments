document.getElementById("box").addEventListener("mouseover", function () {
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("box").addEventListener("mouseout", function () {
    document.getElementById("box").style.backgroundColor = "white";
});

document.getElementById("box").addEventListener("mousedown", function () {
    document.getElementById("box").style.backgroundColor = "red";
});

document.getElementById("box").addEventListener("mouseup", function () {
    document.getElementById("box").style.backgroundColor = "yellow";
});

document.getElementById("box").addEventListener("dblclick", function () {
    document.getElementById("box").style.backgroundColor = "green";
});

document.getElementById("background").addEventListener("wheel", function () {
    document.getElementById("background").style.backgroundColor = "orange";
});

document.getElementById("background").addEventListener("keypress", function () {
    document.getElementById("background").style.backgroundColor = "orange";
});

//next step