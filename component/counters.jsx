import React , {Component} from 'react';
import Counter from './counter'
class Counters extends Component{
state = {
  counters :[
    {id:1,value:4},
    {id:2,value:3},
    {id:3,value:0},
    {id:4,value:0}
         ]
}
handleDelete = (counterId)=>{
const filteredCounters = this.state.counters.filter( counter =>counter.id !== counterId);
this.setState( {counters : filteredCounters});
}
  render (){
    return (
      <div>
     {this.state.counters.map(counter =><Counter key={counter.id} counter ={counter}
     onDelete = {this.handleDelete}> </Counter>)}
      </div>
    )
  }
}

export default Counters