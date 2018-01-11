
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
}

export default Table;
