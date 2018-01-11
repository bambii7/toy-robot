import React from 'react';

class Robot extends React.Component {
    constructor(props) {
        super(props);
        this.facing = Robot.FACES.NORTH;
    }

    right() {
        const isInBoundry = Robot.ROTATION[this.facingIndex() + 1] === undefined;
        const index = isInBoundry ? 0 : this.facingIndex() + 1;
        this.facing = Robot.ROTATION[index];
    }

    left() {
        const isInBoundry = Robot.ROTATION[this.facingIndex() - 1] === undefined;
        const index = isInBoundry ? Robot.ROTATION.length - 1 : this.facingIndex() - 1;
        this.facing = Robot.ROTATION[index];
    }

    facingIndex() {
        return Robot.ROTATION.indexOf(this.facing);
    }

    render() {
        return (<span>Beep Boop</span>);
    }
}

Robot.FACES = {
    NORTH: 'NORTH',
    EAST: 'EAST',
    SOUTH: 'SOUTH',
    WEST: 'WEST'
};

Robot.ROTATION = [Robot.FACES.NORTH, Robot.FACES.EAST, Robot.FACES.SOUTH, Robot.FACES.WEST];

export default Robot;
