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

  cssFunction(){
    this.state.data.map((destination,index)=>{
      if(destination.alarmCount > 0){
        document.getElementById("bell "+index).style.color = "red"
      }
      if(destination.eventCount > 0){
        document.getElementById("event "+index).style.color = "#3894FE"
      }
    })
  }
  componentDidMount(){
    this.cssFunction()
  }

  render(){
    return(
      <Cards data={this.state.data}/>
    )
  }
}

export default App;