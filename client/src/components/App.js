import React from 'react';
import Get from '../api/Get';
import Post from '../api/Post';

/* Displays main contents of db and form to create */
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      'create': ""
    };
  }

  reload = (e) => {
    console.log('reload');
    Get();
  }

  handleType = (e) => {
    this.setState({'create': e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({'create': ''});
    Post({task: this.state.create});
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

          <input type="text" placeholder="New Task" onChange={this.handleType} value={this.state.create}/>
          <button onClick={this.handleSubmit}>Create</button>
        
        </form>
  
      </div>

    );
  }

  componentDidMount(){
    Get();
  }

}

export default App;
