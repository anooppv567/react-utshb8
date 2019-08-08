import React, { Component } from 'react';
import NavBar from './component/navBar';
import Counters from './component/counters';
class Hello extends Component{

render(){

  return(
    <React.Fragment>
    <NavBar/>
    <main className='container'>
     <Counters/>
    </main>
    </React.Fragment>
  )
}
}

export default Hello;
