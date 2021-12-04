"use strict";
var Farm;
(function (Farm) {
    let text;
    let songDOMElement;
    class Animal {
        name;
        animal;
        sound;
        constructor(_name, _animal, _sound) {
            this.name = _name;
            this.animal = _animal;
            this.sound = _sound;
        }
        sing(_food) {
            //console.log("Song Funktion aufgerufen");
            let nameDOMElement = document.querySelector("#animalName");
            songDOMElement = document.querySelector("#song");
            nameDOMElement.innerHTML = this.name;
            songDOMElement.innerHTML = " ``Old MacDonald had a farm, ee-i-ee-i-o." + "<br>" + "<br>" + "And on his farm he had a " + this.animal + " ee-i-ee-i-o. " + "<br>" + "<br>"
                + "With a " + (this.sound + " ").repeat(2) + " here, and a " + (this.sound + " ").repeat(2) + "there" + "<br>" + "<br>"
                + "Here a " + (this.sound) + ", there a " + (this.sound) + ", everywhere a " + (this.sound + " ").repeat(2) + "."
                + "<br>" + "<br>" + "Old MacDonald had a farm, ee-i-ee-i-o.``";
        }
        eat(_amount, _foodPosition) {
            Farm.stock[_foodPosition].amount -= _amount;
            text = document.querySelector("#animal" + _foodPosition);
            text.innerHTML = "There is <i>" + Farm.stock[_foodPosition].amount + "</i>" + "kg " + Farm.stock[_foodPosition].name + " left.";
            let eating = document.querySelector("#eating");
            eating.innerHTML = "The " + this.animal + " " + this.name + " eats " + Farm.stock[_foodPosition].name + ".";
            //console.log("The " + this.type + "" + this.name + " eats" + stock[_foodPosition].name + ".");
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map