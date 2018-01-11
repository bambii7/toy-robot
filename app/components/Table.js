
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
        this.area[x][y] = f;
    }

    placed() {
        return this.area.some(row => row.some(item => item !== 0));
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
