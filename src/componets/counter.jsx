import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        imageUrl : 'https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png'
    }

    render() { 
        return (
            <div>
                <img src={this.state.imageUrl} alt="" />
               <span>{this.formatCount()}</span>
               <button>Increment</button>
            </div>
        );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;