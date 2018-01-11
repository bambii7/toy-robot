import React from 'react';

class Robot extends React.Component {
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

export default Robot;
