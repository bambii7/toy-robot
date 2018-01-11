import Robot from './Robot';

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

    move() {
        const x = this.getX();
        const y = this.getY();
        const facing = this.getFacing();
        const area = [...this.area];
        let newX = x;
        let newY = y;

        switch(facing) {
            case Robot.FACES.NORTH:
                newY = y - 1;
                break;
            case Robot.FACES.EAST:
                newX = x + 1;
                break;
            case Robot.FACES.SOUTH:
                newY = y + 1;
                break;
            case Robot.FACES.WEST:
                newX = x - 1;
                break;
            default:
                // NORTH
                newY = y - 1;
        }
        area[newY][newX] = facing;
        area[y][x] = 0;
        return area;
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
        const facing = this.getFacing();
        return `${this.invertCoordinate(x)}, ${this.invertCoordinate(y)}, ${facing}`;
    }

    getY() {
        return this.area.findIndex(row => row.filter(i => i !== 0).length !== 0);
    }

    getX() {
        return this.area[this.getY()].findIndex(cell => cell !== 0);
    }

    getFacing() {
        const x = this.getX();
        const y = this.getY();
        return this.area[y][x];
    }

    invertCoordinate(value) {
        return (this.area.length - 1) - value;
    }
}

export default Table;
