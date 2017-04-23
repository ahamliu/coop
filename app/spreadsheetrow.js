import React from 'react';

export default class SpreadSheetRow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "name": "",
      "wage": 0,
      "sun": 0,
      "mon": 0,
      "tue": 0,
      "wed": 0,
      "thu": 0,
      "fri": 0,
      "sat": 0,
      "totalpay": 0
    }
  }

  onChange(e){
    if(e.target.name == "name"){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    else{
      var value= Number(e.target.value)
      if(value < 0){
        value = 0
      }
      this.setState({
        [e.target.name]: value
      })
    }

  }


  render(){
    var totalpay= (this.state.sun + this.state.mon + this.state.tue + this.state.wed + this.state.thu + this.state.fri + this.state.sat)*this.state.wage
    return(
      <tr>

        <th>
          <input className="form-control" name="name" type="text" onChange={(e) => this.onChange(e)} value={this.state.name} readOnly={this.props.print}/>
        </th>

        <th className="wage">
          <input className="form-control" name="wage" type="number" onChange={(e) => this.onChange(e)} value={this.state.wage} readOnly={this.props.print}/>
        </th>

        <th className="sunday">
          <input className="form-control" name="sun" type="number" onChange={(e) => this.onChange(e)} value={this.state.sun} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" name="mon" type="number" onChange={(e) => this.onChange(e)} value={this.state.mon} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" name="tue" type="number" onChange={(e) => this.onChange(e)} value={this.state.tue} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" name="wed" type="number" onChange={(e) => this.onChange(e)} value={this.state.wed} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" name="thu" type="number" onChange={(e) => this.onChange(e)} value={this.state.thu} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" name="fri" type="number" onChange={(e) => this.onChange(e)} value={this.state.fri} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" name="sat" type="number" onChange={(e) => this.onChange(e)} value={this.state.sat} readOnly={this.props.print}/>
        </th>

        <th>
          <input className="form-control" readOnly value={totalpay}/>
        </th>
      </tr>
    )
  }
}
