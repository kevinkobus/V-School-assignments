// const XMLHttpRequest = require("xhr2");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    const list = data.objects[0].pokemon
    // console.log(list)
    pokemon(list);
  }
};

function pokemon(list) {
  for (let i = 0; i < list.length; i++) {
    const h2 = document.createElement("h2");
    h2.textContent = list[i].name;
    document.body.appendChild(h2);
  }
}
