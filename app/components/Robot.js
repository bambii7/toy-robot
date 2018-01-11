import React from 'react';

class Robot extends React.Component {
    constructor(props) {
        super(props);
        this.facing = Robot.FACES.NORTH;
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
