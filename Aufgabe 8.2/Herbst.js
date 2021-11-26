"use strict";
/*
Aufgabe: <Aufgabe_08.2 Goldener Herbst>
Name: <Christina Gabler>
Matrikel: <	268529>
Datum: <>
Quellen: <Zusammengearbeitet mit Debbie, Asya, Lisa >
         <orientiert an Jirkas Code- und Konzeptbeispiel>
*/
var Herbstlandschaft;
(function (Herbstlandschaft) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let backgroundPosition = 0.5;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * backgroundPosition;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 870, y: 55 });
        drawCloud({ x: 300, y: 90 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 150, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        drawLeafs();
        drawRoundLeafs();
        drawTrees1({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 8; index++) {
            drawTree2({ x: Math.random() * 1536, y: Math.random() * 220 });
        }
        drawBush({ x: 300, y: 300 }, { x: 70, y: 70 }, 250, 300);
        for (let index = 0; index < 5; index++) {
            drawSquirrel({ x: Math.random() * 1536, y: 250 + Math.random() * 320 });
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 45;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 20));
            let nParticles = 80;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawTrees1(_position2, _size2, _min2, _max2) {
        let stepMin = 50;
        let stepMax = 100;
        let x = -10;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min2 - Math.random() * (_max2 - _min2);
            crc2.save();
            crc2.translate(x, y + (position + 20));
            crc2.beginPath();
            crc2.moveTo(0, 430);
            crc2.lineTo(0, 430);
            crc2.lineTo(-20, 430);
            crc2.lineTo(-20, 380);
            crc2.lineTo(0, 380);
            crc2.fillStyle = "#45311D";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            let nParticles = 70;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#447C31");
            crc2.save();
            crc2.translate(_position2.x, _position2.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size2.x;
                let y = -(Math.random() * _size2.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawTree2(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(300, 330);
        crc2.lineTo(300, 330);
        crc2.lineTo(280, 330);
        crc2.lineTo(280, 280);
        crc2.lineTo(300, 280);
        crc2.fillStyle = "#45311D";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(280, 280);
        crc2.lineTo(280, 280);
        crc2.lineTo(220, 280);
        crc2.lineTo(260, 245);
        crc2.lineTo(230, 245);
        crc2.lineTo(260, 215);
        crc2.lineTo(245, 215);
        crc2.lineTo(290, 175); //Spitze
        crc2.lineTo(335, 215);
        crc2.lineTo(320, 215);
        crc2.lineTo(350, 245);
        crc2.lineTo(320, 245);
        crc2.lineTo(370, 280);
        crc2.lineTo(280, 280);
        crc2.fillStyle = "#1F320B";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawSquirrel(_position) {
        crc2.fillStyle = "#B47D49";
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        // body
        crc2.beginPath();
        crc2.ellipse(30, 70, 20, 40, 0, 10, 20);
        crc2.closePath();
        crc2.fill();
        // arm1
        crc2.beginPath();
        crc2.ellipse(3, 40, 8, 18, 15, 10, 20);
        crc2.closePath();
        crc2.fill();
        // arm2
        crc2.beginPath();
        crc2.ellipse(2, 55, 8, 18, 17, 10, 20);
        crc2.closePath();
        crc2.fill();
        // leg1
        crc2.beginPath();
        crc2.ellipse(3, 90, 8, 18, 20, 10, 20);
        crc2.closePath();
        crc2.fill();
        // leg2
        crc2.beginPath();
        crc2.ellipse(7, 105, 8, 20, 20, 10, 20);
        crc2.closePath();
        crc2.fill();
        // tail
        crc2.beginPath();
        crc2.ellipse(50, 80, 10, 30, 10, 10, 20);
        crc2.closePath();
        crc2.fill();
        // head
        let rHead = 17;
        crc2.beginPath();
        crc2.arc(28, 20, rHead, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        // ear1
        crc2.beginPath();
        crc2.ellipse(34, 5, 7, 15, 10, 10, 20);
        crc2.closePath();
        crc2.fill();
        // ear2
        crc2.beginPath();
        crc2.ellipse(30, 5, 7, 15, 9, 10, 20);
        crc2.closePath();
        crc2.fill();
        // eye
        let rEye = 2;
        crc2.beginPath();
        crc2.arc(25, 14, rEye, 0, 2 * Math.PI);
        crc2.lineWidth = 2;
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.restore();
    }
    function drawLeafs() {
        let nLeafs = 50;
        let rLeafs = 15;
        for (let draw = 0; draw < nLeafs; draw++) {
            let leafs = new Path2D();
            let x = Math.random() * 1536;
            let y = Math.random() * 722;
            leafs.arc(x, y, rLeafs, 199, 50 * Math.PI);
            crc2.fillStyle = "#C3AE2E";
            crc2.fill(leafs);
        }
    }
    function drawRoundLeafs() {
        let nRoundLeafs = 50;
        for (let draw = 0; draw < nRoundLeafs; draw++) {
            let roundLeafs = new Path2D();
            let x = Math.random() * 1536;
            let y = Math.random() * 722;
            roundLeafs.ellipse(x, y, 8, 20, 10, 10, 20);
            crc2.fillStyle = "#446C31";
            crc2.fill(roundLeafs);
        }
    }
})(Herbstlandschaft || (Herbstlandschaft = {}));
//# sourceMappingURL=Herbst.js.map