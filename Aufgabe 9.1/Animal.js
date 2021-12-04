"use strict";
var Farm;
(function (Farm) {
    let text;
    let songDOMElement;
    class Animal {
        name;
        type;
        sound;
        constructor(_name, _type, _sound) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
        }
        sing(_food) {
            let nameDOMElement = document.querySelector("#animalName");
            songDOMElement = document.querySelector("#song");
            nameDOMElement.innerHTML = this.name;
            songDOMElement.innerHTML = " ``Old MacDonald had a farm." + "<br>" + "<br>" + "And on his farm he had a " + this.type + "." + "<br>" + "<br>"
                + "With a " + (this.sound + " ").repeat(2) + " here, and a " + (this.sound + " ").repeat(2) + "there." + "<br>" + "<br>"
                + "Here a " + (this.sound) + ", there a " + (this.sound) + ", everywhere a " + (this.sound + " ").repeat(2) + "."
                + "<br>" + "<br>" + "Old MacDonald had a farm.``";
        }
        eat(_amount, _foodPosition) {
            Farm.stock[_foodPosition].amount -= _amount;
            text = document.querySelector("#animal" + _foodPosition);
            text.innerHTML = "There is <i>" + Farm.stock[_foodPosition].amount + "</i>" + "kg " + Farm.stock[_foodPosition].name + " left.";
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map