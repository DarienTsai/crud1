import React from 'react';


/* a single row in the main db */
class Row extends React.Component{

  handleRemove = () => {
    console.log(this.props);
    this.props.del(this.props.data.id);
  }

  handleUpdate = () => {
    console.log('hello');
    let next = (this.props.data.stat  + 1) % 3;
    this.props.up(this.props.data.id, next)
  }

  render(){
    let status = "not started";
    if(this.props.data.stat == 1) status = "started";
    else if(this.props.data.stat == 2) status = "done";

    return(
      <tr>
        <td>{this.props.data.task}</td>
        <td><button onClick={this.handleUpdate}>{status}</button></td>
        <td><button onClick={this.handleRemove}>Remove</button></td>
      </tr>
    );
  }
}

export default Row;