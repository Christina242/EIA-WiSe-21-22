/*
Aufgabe: <Aufgabe_9.1>
Name: <Christina Gabler>
Matrikel: <268529>
Datum: <04.12.2021>
Quellen: <Zusammengearbeitet mit Debbie, Asya und Lisa >
*/

namespace Farm {

    let timer: number = 0;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        newFarmDay();
        document.querySelector("#newDay")?.addEventListener("click", newFarmDay);
        // drawCow();
    }


    export interface Stock {
        name: string;
        amount: number;
    }

    export let stock: Stock[] = [{

        name: "Hay",
        amount: 500
    },
    {
        name: "Cat Food",
        amount: 20
    },
    {
        name: "Grass",
        amount: 1000
    },
    {
        name: "Dog Food",
        amount: 100
    },
    {
        name: "Corn",
        amount: 55
    }];



    function newFarmDay(): void {
        
        let cow: Animal = new Animal("Chris", "Cow", "Moo");
        let cat: Animal = new Animal("Luna", "Cat", "Miau");
        let pic: Animal = new Animal("Pia", "Pic", "Oink");
        let dog: Animal = new Animal("Dora", "Dog", "Woof");
        let chicken: Animal = new Animal("Clara", "Chicken", "Boock");

        setTimeout(function (): void {
            cow.sing(0);
            cow.eat(35, 0);
        },         500);

        setTimeout(function (): void {
            cat.sing(1);
            cat.eat(5, 1);
        },         2500);

        setTimeout(function (): void {
            pic.sing(2);
            pic.eat(75, 2);
        },         5000);

        setTimeout(function (): void {
            dog.sing(3);
            dog.eat(4, 3);
        },         8000);

        setTimeout(function (): void {
            chicken.sing(4);
            chicken.eat(5, 4);
        },         10000);

        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#dayCounter");
        timer++;
        dayCounter.innerHTML = "Day: " + timer;
        console.log("Day " + timer);
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

}
