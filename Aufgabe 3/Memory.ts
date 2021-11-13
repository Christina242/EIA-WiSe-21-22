// Gruppenarbeit mit Debbie, Asya und Lisa
namespace Aufgabe3 {
    window.addEventListener("load", handleLoad);

    let text: string[] = [];
    let input: string;
    let cards: string[] = [];
    let form: HTMLElement;

    let cardSize: number;
    let timer: number;
    let formValues: string;
    let time: number;
    let backroundColor: string;
    let font: string;
    let cardColor: string;


    function handleLoad(_event: Event): void {
        console.log("Startseite");

        // install listeners on fieldsets
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }

    // install listener on Startbutton
    let start: HTMLElement = <HTMLElement>document.querySelector("#start");
    start.addEventListener("pointerdown", createGameboard);


    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData.entries()) {
            
        }

    }

    function createGameboard(_word: Event): void {
        console.log("Start game");
        let newDiv: HTMLElement = document.createElement("div");
        for (let i: number = 0; i <= text.length; i++);
        text = prompt("enter your sequence");
        if (input == "" || input == null) {
            alert("Please enter a sequence.");
        }
        else {
            form.classList.add("hidden");
            
            text = input.split("");
            let gamefield: HTMLDivElement = document.createElement("div");
            gamefield.classList.add("row");
            for (let i: number = 0; i < input.length; i++) {
                let random: number = Math.floor(Math.random() * text.length);
                let card: HTMLDivElement = document.createElement("div");
                card.classList.add("column");
                card.id = text.splice(random, 1).join();
                let test: string = ("<div class='card'>" + card.id + "</div>");
                card.innerHTML = test;
                // newdiv.classList.add("");
                //newdiv.style.background = document.getElementById('backgroundcolor').innerHTML;
                let body: HTMLBodyElement = document.querySelector("body");
                body.appendChild(gamefield);
                gamefield.appendChild(card);
                //document.body.style.backgroundColor = document.getElementById('backgroundcolor').innerHTML;
            }
            //createGame();
        }
    }
}