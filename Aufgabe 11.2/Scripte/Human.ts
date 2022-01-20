namespace Aufgabe11_2 {
    export class Human extends Moveable {
        public randomScaleX: number;
        public randomScaleY: number;
        public randomNumber: number = (Math.floor(Math.random() * 800) + 100);
        public counter: number = 0;

        constructor(_position: Vector, _velocity: Vector, _randomScale: Vector) {
            super(_position, _velocity);
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
    }

    public draw(): {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);

        //build Body

        crc2.closePath();
        crc2.restore();
    }

    public locate(): void {
        //
    }

}