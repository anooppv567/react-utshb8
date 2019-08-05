import React, { Component } from 'react';

class Counter extends Component{
state = {
  count : 0
};
render(){
    return (
      <div>
      <div className='container'>
      <span className = 'badge badge-primary m-2'>{this.formatCount()}</span>
      <button className = 'btn btn-secondary btn-sm'>+</button>
      </div>
      </div>
      )
  }

  formatCount(){
    return this.state.count === 0 ? 'zero' : this.state.count;
  }

}

export default Counter;