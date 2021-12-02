namespace Farm {
    
   export class Animal {

        animal: string;
        name: string;
        sound: string;

        constructor (_animal: string, _name: string, _sound: string) {
            this.animal = _animal;
            this.name = _name;
            this.sound = _sound;
        }

        eat (_foodAmount: number, _amount: number): void {

            stockAmount[_amount].amount -= _amount;
            textDOMElement = <HTMLElement>document.querySelector("#animal" + _amount);
        }

        sing (_sound: string): void {
            let whichAnimal: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let song: HTMLElement = <HTMLElement>document.querySelector("#songText");

            whichAnimal.innerHTML = this.animal + "  " + this.name;
            song.innerHTML = "Old MacDonald had a farm " + "<br>" + "And on his farm he had some " + this.animal + "s." + "<br> With a" + (this.sound + " ").repeat(2) + "here <br> and a " + (this.sound + " ").repeat(2) + "there.";
        }
    }   
}