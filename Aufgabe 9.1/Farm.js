"use strict";
// Gruppenarbeit mit Debbie, Lisa und Asya
var Farm;
(function (Farm) {
    Farm.stockAmount = [{
            foodName: "hay",
            amount: 200
        },
        {
            foodName: "cat food",
            amount: 350
        },
        {
            foodName: "grass",
            amount: 1000
        },
        {
            foodName: "dog food",
            amount: 150
        },
        {
            foodName: "corn",
            amount: 230
        }];
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad() {
        button = document.querySelector("#newDay");
        button.addEventListener("click", reloadButton);
        // drawCow();
    }
    function newFarmDay() {
        let cow = new Farm.Animal("Chris", "Cow", "mooh");
        let cat = new Farm.Animal("Luna", "Cat", "miou");
        let pig = new Farm.Animal("Pia", "Pig", "oink");
        let dog = new Farm.Animal("Dora", "Dog", "wau");
        let chicken = new Farm.Animal("Clara", "Chicken", "gock");
    }
    /**   function drawCow(): void {
  
          crc2.resetTransform();
          crc2.save();
          crc2.translate(100, 50);
  
          // body
          crc2.beginPath();
          crc2.ellipse(30, 70, 20, 40, 0, 10, 20);
          crc2.closePath();
          crc2.fillStyle = "#000000";
          crc2.fill();
          crc2.restore();
      }*/
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map