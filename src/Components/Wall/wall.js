import React from 'react';

import Brick from '../Brick/brick.js';

import './wall.css';


// wall class inherits from React.Component
class wall extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bricks : [1,2,3]
        }
    }

    addMoreBricks = () => {
        const new_bricks = [...this.state.bricks];
        new_bricks.push(this.state.bricks.pop()+1);
        this.setState({
            bricks: new_bricks
        })
    }

    // @override method
    // render method returns what is being displayed in browser
    render= () => {
        return(
            <div className="wall-container">
                <button onClick={this.addMoreBricks} className="button">Add More Bricks</button>
                {
                    this.state.bricks.map((brick) => {
                        return <Brick key={brick} name={brick}/>;
                    })
                }
            </div>
        );
    }
}

export default wall;