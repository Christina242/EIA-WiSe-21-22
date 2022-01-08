"use strict";
var Aufgabe10_2;
(function (Aufgabe10_2) {
    function drawBackground() {
        // console.log("Background");
        let gradient = Aufgabe10_2.crc2.createLinearGradient(0, 0, 0, Aufgabe10_2.crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(Aufgabe10_2.backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");
        Aufgabe10_2.crc2.fillStyle = gradient;
        Aufgabe10_2.crc2.fillRect(0, 0, Aufgabe10_2.crc2.canvas.width, Aufgabe10_2.crc2.canvas.height);
    }
    Aufgabe10_2.drawBackground = drawBackground;
    function drawSun(_position) {
        // console.log("Sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = Aufgabe10_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Aufgabe10_2.crc2.save();
        Aufgabe10_2.crc2.translate(_position.x, _position.y);
        Aufgabe10_2.crc2.fillStyle = gradient;
        Aufgabe10_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Aufgabe10_2.crc2.fill();
        Aufgabe10_2.crc2.restore();
    }
    Aufgabe10_2.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        //console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        Aufgabe10_2.crc2.save();
        Aufgabe10_2.crc2.translate(_position.x, _position.y);
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.moveTo(0, 0);
        Aufgabe10_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Aufgabe10_2.crc2.lineTo(x, y);
        } while (x < Aufgabe10_2.crc2.canvas.width);
        Aufgabe10_2.crc2.lineTo(x, 0);
        Aufgabe10_2.crc2.closePath();
        let gradient = Aufgabe10_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Aufgabe10_2.crc2.fillStyle = gradient;
        Aufgabe10_2.crc2.fill();
        Aufgabe10_2.crc2.restore();
    }
    Aufgabe10_2.drawMountains = drawMountains;
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let position = Aufgabe10_2.crc2.canvas.height * Aufgabe10_2.backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(x, y + (position + 20));
            let nParticles = 80;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = Aufgabe10_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(_position.x, _position.y);
            Aufgabe10_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Aufgabe10_2.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                Aufgabe10_2.crc2.translate(x, y);
                Aufgabe10_2.crc2.fill(particle);
                Aufgabe10_2.crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Aufgabe10_2.crc2.restore();
        } while (x < Aufgabe10_2.crc2.canvas.width);
    }
    Aufgabe10_2.drawBush = drawBush;
    function drawTrees1(_position2, _size2, _min2, _max2) {
        let stepMin = 50;
        let stepMax = 100;
        let x = -10;
        let position = Aufgabe10_2.crc2.canvas.height * Aufgabe10_2.backgroundPosition;
        do {
            let y = -_min2 - Math.random() * (_max2 - _min2);
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(x, y + (position + 20));
            Aufgabe10_2.crc2.beginPath();
            Aufgabe10_2.crc2.moveTo(0, 430);
            Aufgabe10_2.crc2.lineTo(0, 430);
            Aufgabe10_2.crc2.lineTo(-20, 430);
            Aufgabe10_2.crc2.lineTo(-20, 380);
            Aufgabe10_2.crc2.lineTo(0, 380);
            Aufgabe10_2.crc2.fillStyle = "#45311D";
            Aufgabe10_2.crc2.lineWidth = 1;
            Aufgabe10_2.crc2.closePath();
            Aufgabe10_2.crc2.fill();
            let nParticles = 70;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = Aufgabe10_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#447C31");
            Aufgabe10_2.crc2.save();
            Aufgabe10_2.crc2.translate(_position2.x, _position2.y);
            Aufgabe10_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Aufgabe10_2.crc2.save();
                let x = (Math.random() - 0.5) * _size2.x;
                let y = -(Math.random() * _size2.y);
                Aufgabe10_2.crc2.translate(x, y);
                Aufgabe10_2.crc2.fill(particle);
                Aufgabe10_2.crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Aufgabe10_2.crc2.restore();
        } while (x < Aufgabe10_2.crc2.canvas.width);
    }
    Aufgabe10_2.drawTrees1 = drawTrees1;
    function drawTree2(_position) {
        Aufgabe10_2.crc2.resetTransform();
        Aufgabe10_2.crc2.save();
        Aufgabe10_2.crc2.translate(_position.x, _position.y);
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.moveTo(300, 330);
        Aufgabe10_2.crc2.lineTo(300, 330);
        Aufgabe10_2.crc2.lineTo(280, 330);
        Aufgabe10_2.crc2.lineTo(280, 280);
        Aufgabe10_2.crc2.lineTo(300, 280);
        Aufgabe10_2.crc2.fillStyle = "#45311D";
        Aufgabe10_2.crc2.lineWidth = 1;
        Aufgabe10_2.crc2.fill();
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.moveTo(280, 280);
        Aufgabe10_2.crc2.lineTo(280, 280);
        Aufgabe10_2.crc2.lineTo(220, 280);
        Aufgabe10_2.crc2.lineTo(260, 245);
        Aufgabe10_2.crc2.lineTo(230, 245);
        Aufgabe10_2.crc2.lineTo(260, 215);
        Aufgabe10_2.crc2.lineTo(245, 215);
        Aufgabe10_2.crc2.lineTo(290, 175); //Spitze
        Aufgabe10_2.crc2.lineTo(335, 215);
        Aufgabe10_2.crc2.lineTo(320, 215);
        Aufgabe10_2.crc2.lineTo(350, 245);
        Aufgabe10_2.crc2.lineTo(320, 245);
        Aufgabe10_2.crc2.lineTo(370, 280);
        Aufgabe10_2.crc2.lineTo(280, 280);
        Aufgabe10_2.crc2.fillStyle = "#1F320B";
        Aufgabe10_2.crc2.fill();
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.restore();
    }
    Aufgabe10_2.drawTree2 = drawTree2;
    function drawSquirrel(_position) {
        Aufgabe10_2.crc2.fillStyle = "#B47D49";
        Aufgabe10_2.crc2.resetTransform();
        Aufgabe10_2.crc2.save();
        Aufgabe10_2.crc2.translate(_position.x, _position.y);
        // body
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(30, 70, 20, 40, 0, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // arm1
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(3, 40, 8, 18, 15, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // arm2
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(2, 55, 8, 18, 17, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // leg1
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(3, 90, 8, 18, 20, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // leg2
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(7, 105, 8, 20, 20, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // tail
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(50, 80, 10, 30, 10, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // head
        let rHead = 17;
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.arc(28, 20, rHead, 0, 2 * Math.PI);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // ear1
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(34, 5, 7, 15, 10, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // ear2
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.ellipse(30, 5, 7, 15, 9, 10, 20);
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fill();
        // eye
        let rEye = 2;
        Aufgabe10_2.crc2.beginPath();
        Aufgabe10_2.crc2.arc(25, 14, rEye, 0, 2 * Math.PI);
        Aufgabe10_2.crc2.lineWidth = 2;
        Aufgabe10_2.crc2.closePath();
        Aufgabe10_2.crc2.fillStyle = "#000000";
        Aufgabe10_2.crc2.fill();
        Aufgabe10_2.crc2.restore();
    }
    Aufgabe10_2.drawSquirrel = drawSquirrel;
    function drawLeafs() {
        let nLeafs = 50;
        let rLeafs = 15;
        for (let draw = 0; draw < nLeafs; draw++) {
            let leafs = new Path2D();
            let x = Math.random() * 1536;
            let y = Math.random() * 722;
            leafs.arc(x, y, rLeafs, 199, 50 * Math.PI);
            Aufgabe10_2.crc2.fillStyle = "#C3AE2E";
            Aufgabe10_2.crc2.fill(leafs);
        }
    }
    Aufgabe10_2.drawLeafs = drawLeafs;
    function drawRoundLeafs() {
        let nRoundLeafs = 50;
        for (let draw = 0; draw < nRoundLeafs; draw++) {
            let roundLeafs = new Path2D();
            let x = Math.random() * 1536;
            let y = Math.random() * 722;
            roundLeafs.ellipse(x, y, 8, 20, 10, 10, 20);
            Aufgabe10_2.crc2.fillStyle = "#446C31";
            Aufgabe10_2.crc2.fill(roundLeafs);
        }
    }
    Aufgabe10_2.drawRoundLeafs = drawRoundLeafs;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=Background.js.map