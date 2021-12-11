namespace Aufgabe9_2 {

    export class Leaf {
        posX: number;
        posY: number;
        velocityX: number;
        velocityY: number;
        type: number;

        constructor(_position: Vector, _velocity: Vector, _type: number) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.type = _type;
        }

        leafType(_type: number): void {

            switch (_type) {
                case 1:
                    drawLeafs();
                    break;
                default:
                    drawRoundLeafs();
            }

            function drawLeafs(): void {
                let nLeafs: number = 50;
                let rLeafs: number = 15;

                for (let draw: number = 0; draw < nLeafs; draw++) {
                    let leafs: Path2D = new Path2D();
                    let x: number = Math.random() * 1536;
                    let y: number = Math.random() * 722;

                    leafs.arc(x, y, rLeafs, 199, 50 * Math.PI);
                    crc2.fillStyle = "#C3AE2E";
                    crc2.fill(leafs);
                }
            }

            function drawRoundLeafs(): void {
                let nRoundLeafs: number = 50;

                for (let draw: number = 0; draw < nRoundLeafs; draw++) {
                    let roundLeafs: Path2D = new Path2D();
                    let x: number = Math.random() * 1536;
                    let y: number = Math.random() * 722;

                    roundLeafs.ellipse(x, y, 8, 20, 10, 10, 20);
                    crc2.fillStyle = "#446C31";
                    crc2.fill(roundLeafs);
                }
            }


        }


    }
    /*   public xPos: number;
     public flowerType: number;
     public yRandomMin: number;
     public yRandomMax: number;

     constructor(_flowerType: number, _xPos: number, _yRandomMin: number, _yRandomMax: number) {
         this.xPos = _xPos;
         this.flowerType = _flowerType;
         this.yRandomMax = _yRandomMax;
         this.yRandomMin = _yRandomMin;
         this.draw();
     }

     draw(): void {
         let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
         crc2.save();
         crc2.translate(this.xPos, y);

         if (this.flowerType == 1) { //Lavender
             let flowerColor: string[] = ["#693087", "#793e9a", "#853daf"];
             let flowerSize: number = 1.5 + Math.random() * (2.5 - 1.5);
 
             crc2.scale(flowerSize, flowerSize);
             crc2.fillStyle = "#2f852a";
             crc2.fillRect(0, 0, 0.8, -10);
 
             let yFLower1: number = -10;
             let yFLower2: number = -11;
             let yFLower3: number = -13;
             let yFLower4: number = -14;
 
             for (let z: number = 0; z < 3; z++) {
                 crc2.beginPath();
                 crc2.moveTo(0, yFLower1);
                 crc2.lineTo(-1, yFLower2);
                 crc2.lineTo(-2, yFLower3);
                 crc2.lineTo(-1, yFLower4);
                 crc2.lineTo(0, yFLower4);
                 crc2.lineTo(0.5, yFLower3);
                 crc2.lineTo(1, yFLower4);
                 crc2.lineTo(2, yFLower4);
                 crc2.lineTo(3, yFLower3);
                 crc2.lineTo(2, yFLower2);
                 crc2.lineTo(1, yFLower1);
                 crc2.closePath();
                 crc2.fillStyle = flowerColor[z];
                 crc2.fill();
 
                 yFLower1 += -4;
                 yFLower2 += -4;
                 yFLower3 += -4;
                 yFLower4 += -4;
             }
             crc2.restore();
         }

         else (this.flowerType == 2) { //Dandelion
             let r1: number = 2;
             let r2: number = 7;
             let gradient: CanvasGradient = crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
             let flowerSize: number = .8 + Math.random() * (1.5 - .8);

             gradient.addColorStop(0, "white");
             gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");

             crc2.scale(flowerSize, flowerSize);
             crc2.fillStyle = "#2f852a";
             crc2.fillRect(0, 0, 1.5, -20);
 
             crc2.beginPath();
             crc2.arc(0, -26, r2, 0, 2 * Math.PI);
             crc2.fillStyle = gradient;
             crc2.fill();

             crc2.restore();
         }
     }
 }
    */
}