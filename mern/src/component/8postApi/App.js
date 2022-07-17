import React,{ Component } from 'react';
import ApiGET from './apiGET';
import PostData from './postApi';
import axios from 'axios'
class App extends Component {
  state = {
    data: []
  }

  connectApi() {
    axios.get('http://localhost:3004/posts')
      .then((data) => {
        this.setState({
          data: data.data
        })
      })
  }
  hendlePost(data){
    axios.post('http://localhost:3004/posts',data).then((req)=>{
      this.connectApi()
    })
  }

  handleDelete = (data)=>{
    axios.delete(`http://localhost:3004/posts/${data}`).then((req)=>{
      this.connectApi()
    })
  }


  componentDidMount() {
    this.connectApi()
  }


  render() {
    return (
      <div className="App">
        <PostData post={this.hendlePost}/>
        {
          this.state.data.map(data => {
            return <ApiGET key={data.id} data={data} delete={this.handleDelete}/>
          })
        }
      </div>
    );
  }
}

export default App;
