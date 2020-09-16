import React from 'react';
import Row from './Row';
import Get from '../api/Get';
import Post from '../api/Post';
import Delete from '../api/Delete';
import Update from '../api/Update';

/* Displays main contents of db and form to create */
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      entry: "",
      data: []
    };
  }

  reload = async () => {
    this.setState({data: await Get()});
  }

  remove = async (idx) => {
    this.setState({data: await Delete(idx)});
  }

  update = async (idx, status) => {
    Update(idx, status);
    this.setState({data: await Update(idx, status)});
  }

  handleType = (e) => {
    this.setState({entry: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({entry: ''});

    if (this.state.entry !== ""){
      this.setState({data: await Post({task: this.state.entry})});
    }
  }

  render(){
  let idx = 0;
  let rows = this.state.data.map((task) => { return <Row data={task} key={idx} idx={idx++} del={this.remove} up={this.update}/>; });

    return (

      <div className="App">
  
        <table border="1">

          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>

            {rows}

          </tbody>
  
        </table>
  

        <form>

          <input type="text" placeholder="New Task" onChange={this.handleType} value={this.state.entry}/>
          <button onClick={this.handleSubmit}>Create</button>
        
        </form>
  
      </div>

    );
  }

  async componentDidMount(){
    // Load in db
    this.reload();
  }

}

export default App;
