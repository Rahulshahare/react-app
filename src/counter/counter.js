import React from 'react';
import './counter.css';
/**Ready */
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }
    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decreaseCount(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return(
            <div className="counter">
                <div>
                    <button className="btn btn-primary" onClick={this.increaseCount}>+</button>
                        <span className="count">{this.state.count}</span>
                    <button className="btn btn-primary" onClick={this.decreaseCount}>-</button>
                </div>
            </div>
        )
    }
}