"use strict";
var Farm;
(function (Farm) {
    class Animal {
        animal;
        name;
        sound;
        constructor(_animal, _name, _sound) {
            this.animal = _animal;
            this.name = _name;
            this.sound = _sound;
        }
        eat(_foodAmount, _amount) {
            Farm.stockAmount[_amount].amount -= _amount;
            Farm.textDOMElement = document.querySelector("#animal" + _amount);
        }
        sing(_sound) {
            let whichAnimal = document.querySelector("#animalName");
            let song = document.querySelector("#songText");
            whichAnimal.innerHTML = this.animal + "  " + this.name;
            song.innerHTML = "Old MacDonald had a farm " + "<br>" + "And on his farm he had some " + this.animal + "s." + "<br> With a" + (this.sound + " ").repeat(2) + "here <br> and a " + (this.sound + " ").repeat(2) + "there.";
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map