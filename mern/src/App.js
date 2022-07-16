import React, { Component } from 'react';
import './App.css';
import ApiGET from './component/5apiGET/apiGET';
class App extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }

  render(){
    return (
      <div className="App">
        {
          this.state.data.map( data => {
            return <ApiGET key={data.id} title={data.title} desc={data.body} />
          })
        }
      </div>
    );
  }
}

export default App;
