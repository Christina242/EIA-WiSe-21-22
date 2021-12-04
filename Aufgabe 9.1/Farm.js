"use strict";
/*
Aufgabe: <Aufgabe_9.1>
Name: <Christina Gabler>
Matrikel: <268529>
Datum: <04.12.2021>
Quellen: <Zusammengearbeitet mit Debbie, Asya und Lisa >
*/
var Farm;
(function (Farm) {
    let timer = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        newFarmDay();
        document.querySelector("#newDay")?.addEventListener("click", newFarmDay);
    }
    Farm.stock = [{
            name: "Hay",
            amount: 250
        },
        {
            name: "Cat Food",
            amount: 1000
        },
        {
            name: "Grass",
            amount: 700
        },
        {
            name: "Dog Food",
            amount: 210
        },
        {
            name: "Corn",
            amount: 570
        }];
    function newFarmDay() {
        let cow = new Farm.Animal("Chris", "Cow", "Moho");
        let cat = new Farm.Animal("Clara", "Cat", "Miau");
        let pig = new Farm.Animal("Leo", "Donkey", "Oink");
        let dog = new Farm.Animal("Dora", "Chicken", "wook");
        let chicken = new Farm.Animal("Claus", "Dog", "Bock");
        setTimeout(function () {
            cow.sing(0);
            cow.eat(45, 0);
        }, 500);
        setTimeout(function () {
            cat.sing(1);
            cat.eat(12, 1);
        }, 2500);
        setTimeout(function () {
            pig.sing(2);
            pig.eat(20, 2);
        }, 5000);
        setTimeout(function () {
            dog.sing(3);
            dog.eat(6, 3);
        }, 8000);
        setTimeout(function () {
            chicken.sing(4);
            chicken.eat(5, 4);
        }, 10000);
        let dayCounter = document.querySelector("#dayCounter");
        timer++;
        dayCounter.innerHTML = "Day: " + timer;
        console.log("Day " + timer);
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map