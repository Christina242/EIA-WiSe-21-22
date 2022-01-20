"use strict";
var Aufgabe10_2;
(function (Aufgabe10_2) {
    class Leaf {
        posX;
        posY;
        velocityX;
        velocityY;
        type;
        constructor(_position, _velocity, _type) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.type = _type;
        }
        leafType(_type, _positionX, _positionY) {
            switch (_type) {
                case 1:
                    drawLeafs();
                    break;
                default:
                    drawRoundLeafs();
            }
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
        }
    }
    Aufgabe10_2.Leaf = Leaf;
})(Aufgabe10_2 || (Aufgabe10_2 = {}));
//# sourceMappingURL=Leaf.js.map