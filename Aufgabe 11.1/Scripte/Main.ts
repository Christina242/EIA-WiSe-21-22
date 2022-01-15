/*
Aufgabe: <Aufgabe 11.1>
Name: <Christina Gabler>
Matrikel: <268529>
Datum: <>
Quellen: <Zusammengearbeitet mit Debbie, Asya, Lisa >
*/

namespace Aufgabe11_1 {

    export let crc2: CanvasRenderingContext2D;
    export let backgroundPosition: number = 0.5;
    let imageData: ImageData;
    let clouds: Cloud[] = [];
    let leafs: Leaf[] = [];

    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2 = canvas.getContext("2d")!;
        if (!canvas)
            return;

        let horizon: number = crc2.canvas.height * backgroundPosition;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawSun({ x: 870, y: 55 });
        drawMountains(posMountains, 75, 150, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        drawTrees1({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);

        for (let index: number = 0; index < 8; index++) {
            drawTree2({ x: Math.random() * 1536, y: Math.random() * 220 });
        }

        drawBush({ x: 300, y: 300 }, { x: 70, y: 70 }, 250, 300);

        for (let index: number = 0; index < 5; index++) {
            drawSquirrel({ x: Math.random() * 1536, y: 250 + Math.random() * 320 });
        }
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        createCloud();
        createLeaf();
       //animate();
    }

  
    function createCloud(): void {
        clouds.push(new Cloud({ x: crc2.canvas.width * .7, y: crc2.canvas.height * 0.19 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * 0.23 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * 0.2 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .2, y: crc2.canvas.height * 0.2 }));
    }

    function createLeaf(): void {

        for (let i: number = 0; i < 20; i++) {

            let randomLeaf: number = Math.floor(Math.random() * 2);            

            let leaf: Leaf = new Leaf(1, 10, 40, randomLeaf());
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
}