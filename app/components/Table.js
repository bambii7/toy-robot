
class Table {
    constructor() {
        this.area = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ];
    }

    place(x, y, f) {
        const xCoordinate = this.invertCoordinate(x);
        const yCoordinate = this.invertCoordinate(y);
        if (!this.checkCollision(xCoordinate, yCoordinate)) {
            throw new Error('Invalid Placement');
        }
        this.area[yCoordinate][xCoordinate] = f;
    }

    placed() {
        return this.area.some(row => row.some(item => item !== 0));
    }

    checkCollision(x, y) {
        const validY = this.area[y] === undefined ? false : true;
        let validX = false;
        if (validY) {
            validX = this.area[y][x] === undefined ? false : true;
        }
        return validX && validY;
    }

    report() {
        const x = this.getX();
        const y = this.getY();
        const facing = this.area[y][x];
        return `${this.invertCoordinate(x)}, ${this.invertCoordinate(y)}, ${facing}`;
    }

    getY() {
        return this.area.findIndex(row => row.filter(i => i !== 0).length !== 0);
    }

    getX() {
        return this.area[this.getY()].findIndex(cell => cell !== 0);
    }

    invertCoordinate(value) {
        return (this.area.length - 1) - value;
    }
}

export default Table;
