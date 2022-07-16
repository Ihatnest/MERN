import React,{ Component } from 'react';
import ApiGET from './apiGET';
import axios from 'axios'
class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    // menggunakan fetch
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => {
    //   this.setState({
    //     data: json
    //   })
    // })

    // menggunakan axios
    axios.get('http://localhost:3004/posts')
      .then((data) => {
        this.setState({
          data: data.data
        })
      })
  }



  render() {
    return (
      <div className="App">
        {
          this.state.data.map(data => {
            return <ApiGET key={data.id} title={data.title} desc={data.body} />
          })
        }
      </div>
    );
  }
}

export default App;
