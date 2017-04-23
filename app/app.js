import React from 'react'
import ReactDOM from 'react-dom'
import SpreadSheet from './spreadsheet.js'

class Header extends React.Component {
  render(){
    return (
      <div className="container">
        <h1 className="red"> Employee Time Sheet </h1>
        { this.props.children }
      </div>
    )
  }
}



ReactDOM.render((
 <Header>
  <SpreadSheet />
 </Header>
) , document.getElementById('app'))
