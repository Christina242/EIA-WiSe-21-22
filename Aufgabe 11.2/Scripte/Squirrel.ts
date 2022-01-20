namespace Aufgabe11_2 {
export class Squirrel extends Moveable {
    public randomScaleX: number;
    public randomScaleY: number;
    public randomNumber: number = (Math.floor(Math.random() * 800) + 100);
    public counter: number = 0;

    constructor( _position: Vector, _velocity: Vector, _randomScale: Vector) {
        super(_position, _velocity);
        this.randomScaleX = _randomScale.x;
        this.randomScaleY = _randomScale.y;
    }

    public draw(): void {
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
        let rHead: number = 17;
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
        let rEye: number = 2;
        crc2.beginPath();
        crc2.arc(25, 14, rEye, 0, 2 * Math.PI);
        crc2.lineWidth = 2;
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.restore();
    }

    /* public update(): void {
        if (this.posX > crc2.canvas.width || this.posX < 0) {
            this.velocityX = -this.velocityX;
        }

        if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
            this.velocityY = -this.velocityY;
        }

        if (this.counter == this.randomNumber) {
            this.velocityX = -this.velocityX;
            this.velocityY = -this.velocityY;
            this.counter = 0;
            this.randomNumber = (Math.floor(Math.random() * 800) + 100);
        }

        this.posX += this.velocityX;
        this.posY += this.velocityY;
        this.counter ++;
        this.draw();
    }
    */
  

}}
