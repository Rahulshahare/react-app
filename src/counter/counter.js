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
            <h1>Counter</h1>
        )
    }
}