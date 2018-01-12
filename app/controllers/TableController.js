import RobotModel from '../models/RobotModel';
import TableModel from '../models/TableModel';

class TableController {
    static ERROR_TYPES = {
        INVLAID_PLACEMENT: 'Beep Boop!',
        INVLAID_MOVEMENT: 'Beep Beep Booop!'
    };

    constructor(table = TableModel.tableFactory()) {
        this.area = table;
    }

    place(x, y, facing) {
        const xCoordinate = this.invertCoordinate(x);
        const yCoordinate = this.invertCoordinate(y);
        this.area = TableModel.tableFactory();
        if (!this.checkCollision(xCoordinate, yCoordinate)) {
            throw new Error(TableController.ERROR_TYPES.INVLAID_PLACEMENT);
        }
        this.area[yCoordinate][xCoordinate] = facing;
    }

    placed() {
        return this.area.some(row => row.some(item => item !== 0));
    }

    move() {
        const x = this.getX();
        const y = this.getY();
        const facing = this.facing;
        const area = [...this.area];
        let newX = x;
        let newY = y;

        switch(facing) {
            case RobotModel.FACES.NORTH:
                newY = y - 1;
                break;
            case RobotModel.FACES.EAST:
                newX = x + 1;
                break;
            case RobotModel.FACES.SOUTH:
                newY = y + 1;
                break;
            case RobotModel.FACES.WEST:
                newX = x - 1;
                break;
            default:
                // NORTH
                newY = y - 1;
        }
        if (!this.checkCollision(newX, newY)) {
            throw new Error(TableController.ERROR_TYPES.INVLAID_MOVEMENT);
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
        const facing = this.facing;
        return `${this.invertCoordinate(x)}, ${this.invertCoordinate(y)}, ${facing}`;
    }

    getY() {
        if (!this.placed()) {
            return 0;
        }
        return this.area.findIndex(row => row.filter(i => i !== 0).length !== 0);
    }

    getX() {
        if (!this.placed()) {
            return 0;
        }
        const y = this.getY();
        return this.area[y].findIndex(cell => cell !== 0);
    }

    get facing() {
        if (!this.placed()) {
            return null;
        }
        const x = this.getX();
        const y = this.getY();
        return this.area[y][x];
    }

    set facing(value) {
        const x = this.getX();
        const y = this.getY();
        this.area[y][x] = value;
    }

    invertCoordinate(value) {
        return (this.area.length - 1) - value;
    }
}

export default TableController;
