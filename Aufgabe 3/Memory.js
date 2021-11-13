"use strict";
// Gruppenarbeit mit Debbie, Asya und Lisa
var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", handleLoad);
    let text = [];
    let input;
    let cards = [];
    let form;
    let cardSize;
    let timer;
    let formValues;
    let time;
    let backroundColor;
    let font;
    let cardColor;
    function handleLoad(_event) {
        console.log("Startseite");
        // install listeners on fieldsets
        let fieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    // install listener on Startbutton
    let start = document.querySelector("#start");
    start.addEventListener("pointerdown", createGameboard);
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries()) {
        }
    }
    function createGameboard(_word) {
        console.log("Start game");
        let newDiv = document.createElement("div");
        for (let i = 0; i <= text.length; i++)
            ;
        text = prompt("enter your sequence");
        if (input == "" || input == null) {
            alert("Please enter a sequence.");
        }
        else {
            form.classList.add("hidden");
            text = input.split("");
            let gamefield = document.createElement("div");
            gamefield.classList.add("row");
            for (let i = 0; i < input.length; i++) {
                let random = Math.floor(Math.random() * text.length);
                let card = document.createElement("div");
                card.classList.add("column");
                card.id = text.splice(random, 1).join();
                let test = ("<div class='card'>" + card.id + "</div>");
                card.innerHTML = test;
                // newdiv.classList.add("");
                //newdiv.style.background = document.getElementById('backgroundcolor').innerHTML;
                let body = document.querySelector("body");
                body.appendChild(gamefield);
                gamefield.appendChild(card);
                //document.body.style.backgroundColor = document.getElementById('backgroundcolor').innerHTML;
            }
            //createGame();
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Memory.js.map