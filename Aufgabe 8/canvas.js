"use strict";
// Gruppenarbeit mit Debbie, Lisa und Asya
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let button;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        button = document.querySelector("#button");
        button.addEventListener("click", reloadButton);
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 900;
            let y = Math.random() * 1000;
            drawStars(x, y);
            drawLine(x, y);
        }
        for (let i = 0; i < 100; i++) {
            let a = Math.random() * 900;
            let b = Math.random() * 1000;
            drawLine(a, b);
        }
    }
    function reloadButton() {
        window.location.reload();
    }
    function generateColor() {
        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            +
                Math.floor(Math.random() * 255) + ")";
        return color;
    }
    function drawStars(_x, _y) {
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
    function drawLine(_a, _b) {
        crc2.beginPath();
        crc2.moveTo(_a, _b);
        crc2.lineTo(600, 450);
        crc2.stroke();
        crc2.fillStyle = generateColor();
        crc2.fill();
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=canvas.js.map