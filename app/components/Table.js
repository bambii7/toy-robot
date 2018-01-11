
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
        if (!this.checkCollision(x, y)) {
            throw new Error('Invalid Placement');
        }
        this.area[x][y] = f;
    }

    placed() {
        return this.area.some(row => row.some(item => item !== 0));
    }

    checkCollision(x, y) {
        const validX = this.area[x] === undefined ? false : true;
        let validY = false;
        if (validX) {
            validY = this.area[x][y] === undefined ? false : true;
        }
        return validX && validY;
    }

    report() {
        const x = this.getX();
        const y = this.getY();
        const facing = this.area[x][y];
        return `${x}, ${y}, ${facing}`;
    }

    getX() {
        return this.area.findIndex(row => row !== [0, 0, 0, 0, 0]);
    }

    getY() {
        return this.area[this.getX()].findIndex(cell => cell !== 0);
    }
}

export default Table;
