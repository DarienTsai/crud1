import React from 'react';
import Get from '../api/Get';
import Post from '../api/Post';

/* Displays main contents of db and form to create */
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      entry: "",
      data: null
    };
  }

  reload = (e) => {
    console.log('reload');
    Get();
  }

  handleType = (e) => {
    this.setState({entry: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({entry: ''});

    if (this.state.entry !== ""){
      Post({task: this.state.entry});
    }
  }

  render(){
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

          </tbody>
  
        </table>
  

        <form>

          <input type="text" placeholder="New Task" onChange={this.handleType} value={this.state.entry}/>
          <button onClick={this.handleSubmit}>Create</button>
        
        </form>
  
      </div>

    );
  }

  componentDidMount(){
    // Load in db
    this.setState({data: Get()});
  }

}

export default App;
