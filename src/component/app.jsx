import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../sampleData.json'
import Cards from './card.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data: Data,
    }
  }
  render(){
    return(
      <Cards data={this.state.data}/>
    )
  }
}

export default App;