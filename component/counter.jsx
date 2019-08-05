import React, { Component } from 'react';

class Counter extends Component{
state = {
  count : 0,
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
handleCounter = ()=>{
  this.state.count = this.state.count +1;
  this.setState({count:this.state.count});
  //console.log(this.state.count);
}
render(){
  
    return (
      <div>
      <div className='container'>
      <span style = {this.styles} className ={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick = {this.handleCounter}className = 'btn btn-secondary btn-sm'>+</button>
     </div>
      </div>
      )
  }
  getBadgeClasses(){
    let badgeClasses = 'badge m-2 badge-';
        badgeClasses += (this.state.count === 0) ? 'warning' : 'primary';
     return badgeClasses;
  }

  formatCount(){
    return this.state.count === 0 ? 'zero' : this.state.count;
  }

}

export default Counter;