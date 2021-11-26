    // Gruppenarbeit mit Debbie, Lisa und Asya
namespace Aufgabe4 {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let button: HTMLButtonElement;

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        button = document.querySelector("#button");
        button.addEventListener("click", reloadButton);

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * 900;
            let y: number = Math.random() * 1000;
            drawStars(x, y);
            drawLine(x, y);
        }

        for (let i: number = 0; i < 100; i++) {
            let a: number = Math.random() * 900;
            let b: number = Math.random() * 1000; 
            drawLine(a, b);
        }
    }

    function reloadButton(): void {
        window.location.reload();
    }

    function generateColor(): string {
        var color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            +
            Math.floor(Math.random() * 255) + ")";
        return color;
    }

    function drawStars(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y + 130);
        crc2.lineTo(_x + -20, _y + 150);
        crc2.lineTo(_x + 100, _y + 190);
        crc2.lineTo(_x + 30, _y + 290);
        crc2.lineTo(_x + 140, _y + 230);
        crc2.lineTo(_x + 170, _y + 350);
        crc2.lineTo(_x + 200, _y + 230);
        crc2.lineTo(_x + 310, _y + 290);
        crc2.lineTo(_x + 240, _y + 190);
        crc2.lineTo(_x + 350, _y + 150);
        crc2.lineTo(_x + 240, _y + 120);
        crc2.lineTo(_x + 230, _y + 20);
        crc2.lineTo(_x + 160, _y + 90);

        crc2.lineWidth = 3;
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = generateColor();
        crc2.fill();
    }

    function drawLine(_a: number, _b: number): void {
        crc2.beginPath();
        crc2.moveTo(_a, _b);
        crc2.lineTo(600, 450);
        crc2.stroke();

        crc2.fillStyle = generateColor();
        crc2.fill();
    }
}