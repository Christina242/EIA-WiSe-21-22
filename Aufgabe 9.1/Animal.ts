namespace Farm {

    let text: HTMLElement;
    let songDOMElement: HTMLElement;

    export class Animal {
        name: string;
        type: string;
        sound: string;
    
        constructor(_name: string, _type: string, _sound: string) {

            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            
        }

        sing(_food: number): void {
            let nameDOMElement: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            songDOMElement = <HTMLElement>document.querySelector("#song");

            nameDOMElement.innerHTML = this.name;
            songDOMElement.innerHTML = " ``Old MacDonald had a farm." + "<br>" + "<br>" + "And on his farm he had a " + this.type + "." + "<br>" + "<br>" 
            + "With a " + (this.sound + " ").repeat(2) + " here, and a " + (this.sound + " ").repeat(2) + "there." + "<br>" + "<br>"
            + "Here a " + (this.sound) + ", there a " + (this.sound) + ", everywhere a " + (this.sound + " ").repeat(2) + "." 
            + "<br>" + "<br>" + "Old MacDonald had a farm.``";
            

        }

        eat (_amount: number, _foodPosition: number): void {
            stock[_foodPosition].amount -= _amount;
            text = <HTMLElement>document.querySelector("#animal" + _foodPosition);
            text.innerHTML = "There is <i>" + stock[_foodPosition].amount + "</i>" + "kg " + stock[_foodPosition].name + " left.";
            
        }
    }
    
}

