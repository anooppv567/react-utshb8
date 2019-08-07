import React, { Component } from 'react';

class Counter extends Component{
state = {
  count : this.props.counter.value,
  tags : ['tag1','tag2','tag3']
};
styles = {
  fontSize:10,
  fontWeight:'bold'
}

renderTags(){
  if(this.state.tags.length ===0) return 'No tags are there';
 return <ul>
      {this.state.tags.map(tag =><li key ={tag}>{tag}</li>)}
  </ul>
}


render(){
  
    return (
      <div>
      <h4>Counter #{this.props.counter.id}</h4>
      <div className='container'>
      <span style = {this.styles} className ={this.getBadgeClasses()}>{this.formatCount()}</span>
      <div >
      <button  
      style = {{marginRight:10}}
      onClick = {()=>this.props.onDecrement(this.props.counter)}
      className = 'btn btn-secondary btn-sm'>-</button>
      <button
      style = {{marginRight:10}}
       onClick = {() =>this.props.onIncrement(this.props.counter)}
       className = 'btn btn-secondary btn-sm'>+</button>
       <button 
       onClick = {() =>this.props.onDelete(this.props.counter.id)}
       className = 'btn btn-danger btn-sm' >Delete
       
       </button>
      </div>
     </div>
      </div>
      )
  }
  getBadgeClasses(){
    let badgeClasses = 'badge m-2 badge-';
        badgeClasses += (this.props.counter.value === 0) ? 'warning' : 'primary';
     return badgeClasses;
  }

  formatCount(){
    return this.props.counter.value === 0 ? 'zero' : this.props.counter.value;
  }

}

export default Counter;