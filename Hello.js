import React, { Component } from 'react';
import NavBar from './component/navBar';
import Counters from './component/counters';
class Hello extends Component{
state = {
  counters :[
    {id:1,value:4},
    {id:2,value:3},
    {id:3,value:0},
    {id:4,value:0}
         ]
}
handleReset = ()=>{
  const counters = this.state.counters.filter(counter =>{
    counter.value =0;
    return counter;
  });
  this.setState({counters});

}
handleDelete = (counterId)=>{
const filteredCounters = this.state.counters.filter( counter =>counter.id !== counterId);
this.setState( {counters : filteredCounters});
}
handleCounter = (counter)=>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value++;
 this.setState({counters});
}
decrementCounter = (counter) =>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters})

}
render(){

  return(
    <React.Fragment>
    <NavBar totalCounter = {this.state.counters.filter(counter =>counter.value>0).length}/>
    <main className='container'>
     <Counters  
     counters = {this.state.counters}
      onDelete = {this.handleDelete}
     onIncrement = {this.handleCounter}
     onDecrement = {this.decrementCounter}
     onReset = {this.handleReset}></Counters>
    </main>
    </React.Fragment>
  )
}
}

export default Hello;
