import React from 'react';
import SpreadSheetRow from './spreadsheetrow.js'

export default class SpreadSheet extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        numrows: 3,
        weeknum: 1,
        print: false
      }
  }

  createRows() {
    var rows= []
    for(var i =0 ; i< this.state.numrows ; i++){
      rows.push((
        <SpreadSheetRow key={i} print={this.state.print}/>
      ))
    }
    return rows
  }

  onclick(e){
    console.log("test")
    e.preventDefault()
    var newrows = this.state.numrows+1
    console.log(newrows)
    this.setState({
      numrows: newrows
    })
  }

  lessrows(e){
    console.log("test")
    e.preventDefault()
    var newrows = this.state.numrows
    if(newrows > 1){
        newrows = this.state.numrows-1
    }
    else{
      newrows = this.state.numrows
    }
    console.log(newrows)
    this.setState({
      numrows: newrows
    })
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  togglePrint(e){
    e.preventDefault()
    this.setState({
      print: true
    })
  }

  render() {
    var rows= this.createRows()
    if(!this.state.print){
      return (
        <form>
          <div className="row">
            <div className="col-md-9"></div>
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-addon">Week Number</span>
                <input className="form-control" name="weeknum" type="number" onChange={(e) => this.onChange(e)} value={this.state.weeknum}/>
              </div>
            </div>
          </div>
          <table className="spreadsheetform">
            <tr>

              <th>
                <h4>Employee Name</h4>
              </th>

              <th className="wage">
                <h4>Hourly Wage</h4>
              </th>

              <th id="sunday">
                <h4>Sun</h4>
              </th>

              <th>
                <h4>Mon</h4>
              </th>

              <th>
                <h4>Tue</h4>
              </th>

              <th>
                <h4>Wed</h4>
              </th>

              <th>
                <h4>Thu</h4>
              </th>

              <th>
                <h4>Fri</h4>
              </th>

              <th>
                <h4>Sat</h4>
              </th>

              <th>
                <h4>Total Pay</h4>
              </th>
            </tr>
            {
              rows
            }
          </table>
          <div className="btn-group">
            <button type="button" className="btn btn-default" onClick={(e) => this.onclick(e)}><span className="glyphicon glyphicon-plus"></span> Row</button>
            <button type="button" className="btn btn-default" onClick={(e) => this.lessrows(e)}><span className="glyphicon glyphicon-minus"></span> Row</button>
          </div>
          <button type="button" className="btn btn-default pull-right" onClick={(e) => this.togglePrint(e)}><span className="glyphicon glyphicon-print"></span> Print</button>
        </form>
      )
    }
    else{
      return(
        <form>
          <div className="row">
            <div className="col-md-9"></div>
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-addon">{"Week Number: " + this.state.weeknum}</span>
              </div>
            </div>
          </div>
          <table className="spreadsheetform">
            <tr>

              <th>
                <h4>Employee Name</h4>
              </th>

              <th className="wage">
                <h4>Hourly Wage</h4>
              </th>

              <th id="sunday">
                <h4>Sun</h4>
              </th>

              <th>
                <h4>Mon</h4>
              </th>

              <th>
                <h4>Tue</h4>
              </th>

              <th>
                <h4>Wed</h4>
              </th>

              <th>
                <h4>Thu</h4>
              </th>

              <th>
                <h4>Fri</h4>
              </th>

              <th>
                <h4>Sat</h4>
              </th>

              <th>
                <h4>Total Pay</h4>
              </th>
            </tr>
            {
              rows
            }
          </table>
        </form>
      )
    }
  }
}
