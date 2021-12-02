// Gruppenarbeit mit Debbie, Lisa und Asya
namespace Farm {

    export let textDOMElement: HTMLElement;

    export interface Stock {
        foodName: string;
        amount: number;
    }

    export let stockAmount: Stock[] = [{
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
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        button = document.querySelector("#newDay");
        button.addEventListener("click", reloadButton);
        // drawCow();
    }

    function newFarmDay(): void {

        let cow: Animal = new Animal("Chris", "Cow", "mooh");

        let cat: Animal = new Animal("Luna", "Cat", "miou");

        let pig: Animal = new Animal("Pia", "Pig", "oink");

        let dog: Animal = new Animal("Dora", "Dog", "wau");

        let chicken: Animal = new Animal("Clara", "Chicken", "gock");
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
