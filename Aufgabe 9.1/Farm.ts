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
    }




    export interface Stock {
        name: string;
        amount: number;
    }

    export let stock: Stock[] = [{

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



    function newFarmDay(): void {
        
        let cow: Animal = new Animal("Chris", "Cow", "Moho");
        let cat: Animal = new Animal("Clara", "Cat", "Miau");
        let pig: Animal = new Animal("Leo", "Donkey", "Oink");
        let dog: Animal = new Animal("Dora", "Chicken", "Woof");
        let chicken: Animal = new Animal("Claus", "Dog", "Bock");

        setTimeout(function (): void {
            cow.sing(0);
            cow.eat(45, 0);
        },         500);

        setTimeout(function (): void {
            cat.sing(1);
            cat.eat(12, 1);
        },         2500);

        setTimeout(function (): void {
            pig.sing(2);
            pig.eat(20, 2);
        },         5000);

        setTimeout(function (): void {
            dog.sing(3);
            dog.eat(6, 3);
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
}
