namespace Aufgabe11_2 {

    export class Leaf {
        posX: number;
        posY: number;
        velocityX: number;
        velocityY: number;
        type: number;

       public constructor(_position: Vector, _velocity: Vector, _type: number) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
            this.type = _type;
        }

        protected draw(): void {
            //
        }
    }

    export class DrawLeafs extends Leaf {
        public draw(): void {
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
    }

    export class DrawRoundLeafs extends Leaf {
       public draw(): void {
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
