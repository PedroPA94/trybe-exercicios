document.getElementById("container").style.backgroundColor =  "#f3f3f3";

document.getElementById("header-container").style.padding = "0px";

let titulo = document.getElementsByTagName("h1")[0];

titulo.style.backgroundColor = "#06b16b";
titulo.style.padding = "15px";

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "#fba386";

let tarefasUrgentes = document.querySelectorAll(".emergency-tasks h3");

for (let index = 0; index < tarefasUrgentes.length; index += 1) {
    tarefasUrgentes[index].style.backgroundColor = "#a207eb";
}

document.querySelectorAll(".no-emergency-tasks")[0].style.backgroundColor = "#fbdb5c";

document.getElementsByTagName('h3')[2].style.backgroundColor = "#232524";

document.getElementsByTagName('h3')[3].style.backgroundColor = "#232524";

document.querySelector('footer').style.backgroundColor = "#013533";