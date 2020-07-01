import React, { Component } from 'react'; // (1)

export default class Counter extends Component { // (2)
    constructor(props) { // (3)
        super(props);
        this.state = {
        count: 0,
        result: null
    }
}

render() {  
    const currCount = this.state.count;
    const result = this.state.result;
    return ( // (5)
        <div className="counter">
            <h2 className="current-count">{currCount}</h2>
            <h3 className="result" style={{color:"red"}}>{result}</h3>
            <button className="increment"> Increase </button>
        </div>
        )
    }
}