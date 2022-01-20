"use strict";
/*
Aufgabe: <Aufgabe_10.2>
Name: <Christina Gabler>
Matrikel: <268529>
Datum: <>
Quellen: <Zusammengearbeitet mit Debbie, Asya, Lisa >
*/
// Leider nicht fertig geworden, da für den Test gelernt
var Aufgabe10_2;
(function (Aufgabe10_2) {
    Aufgabe10_2.backgroundPosition = 0.5;
    let imageData;
    let clouds = [];
    let leafs = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Aufgabe10_2.crc2 = canvas.getContext("2d");
        Aufgabe10_2.crc2 = canvas.getContext("2d");
        if (!canvas)
            return;
        let horizon = Aufgabe10_2.crc2.canvas.height * Aufgabe10_2.backgroundPosition;
        let posMountains = { x: 0, y: horizon };
        Aufgabe10_2.drawBackground();
        Aufgabe10_2.drawSun({ x: 870, y: 55 });
        Aufgabe10_2.drawMountains(posMountains, 75, 150, "grey", "white");
        Aufgabe10_2.drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        Aufgabe10_2.drawTrees1({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 8; index++) {
            Aufgabe10_2.drawTree2({ x: Math.random() * 1536, y: Math.random() * 220 });
        }
        Aufgabe10_2.drawBush({ x: 300, y: 300 }, { x: 70, y: 70 }, 250, 300);
        for (let index = 0; index < 5; index++) {
            Aufgabe10_2.drawSquirrel({ x: Math.random() * 1536, y: 250 + Math.random() * 320 });
        }
        imageData = Aufgabe10_2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createCloud();
        createLeaf();
        //animate();
    }
    function createCloud() {
        clouds.push(new Aufgabe10_2.Cloud({ x: Aufgabe10_2.crc2.canvas.width * .7, y: Aufgabe10_2.crc2.canvas.height * 0.19 }));
        clouds.push(new Aufgabe10_2.Cloud({ x: Aufgabe10_2.crc2.canvas.width * .10, y: Aufgabe10_2.crc2.canvas.height * 0.23 }));
        clouds.push(new Aufgabe10_2.Cloud({ x: Aufgabe10_2.crc2.canvas.width * .5, y: Aufgabe10_2.crc2.canvas.height * 0.2 }));
        clouds.push(new Aufgabe10_2.Cloud({ x: Aufgabe10_2.crc2.canvas.width * .2, y: Aufgabe10_2.crc2.canvas.height * 0.2 }));
    }
    function createLeaf() {
        for (let i = 0; i < 20; i++) {
            let randomLeaf = Math.floor(Math.random() * 2);
            let leaf = new Aufgabe10_2.Leaf(1, 10, 40, randomLeaf());
            leafs.push(leaf);
            //leafs.push(leaf2);
            leaf.drawLeafs();
        }
    }
    /*function animate(): void {
        requestAnimationFrame(animate);
        crc2.putImageData(imageData, 0, 0);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        cloud.move(1 / 100);
    }
    */
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=Main.js.map