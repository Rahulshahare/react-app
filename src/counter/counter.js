import React from 'react';
import './counter.css';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div className="counter">
                <div>
                    <button>+</button>
                        <span className="count">{this.state.count}</span>
                    <button>-</button>
                </div>
            </div>
        )
    }
}