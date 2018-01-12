import RobotModel from '../models/RobotModel';

class RobotController {
    constructor(facing = RobotModel.FACES.NORTH) {
        this.facing = facing;
    }

    right() {
        const isInBoundry = RobotModel.ROTATION[this.facingIndex() + 1] === undefined;
        const index = isInBoundry ? 0 : this.facingIndex() + 1;
        this.facing = RobotModel.ROTATION[index];
    }

    left() {
        const isInBoundry = RobotModel.ROTATION[this.facingIndex() - 1] === undefined;
        const index = isInBoundry ? RobotModel.ROTATION.length - 1 : this.facingIndex() - 1;
        this.facing = RobotModel.ROTATION[index];
    }

    facingIndex() {
        return RobotModel.ROTATION.indexOf(this.facing);
    }

}

export default RobotController;
