import React,{ Component, Fragment } from 'react';
import ApiGET from './apiGET';
import PostData from './postApi';
import axios from 'axios'
class App extends Component {
  state = {
    data: [],
    dataUpdate: []
  }

  connectApi() {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((data) => {
        this.setState({
          data: data.data
        })
      })
  }

  hendlePost = (data) => {
    axios.post('http://localhost:3004/posts',data).then((req) => {
      this.connectApi()
    })
  }

  hendleUpdate = (data) => {
    if (data === undefined){
      this.setState({
        dataUpdate: data
      })
    }else {
      this.setState({
        dataUpdate: undefined
      })
    }
    console.log(data)
  }

  hendleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((req) => {
      this.connectApi()
    })
  }

  componentDidMount() {
    this.connectApi()
  }

  render() {
    let post
    if (this.state.dataUpdate !== undefined) {
      post = <PostData post={this.hendlePost} />
    } else {
      post = <PostData post={this.hendleUpdate} title={'data'}/>
    }
    return (
      <Fragment>
        {post}
        {
          this.state.data.map(data => {
            return <ApiGET key={data.id} data={data} delete={this.hendleDelete} update={this.hendleUpdate} />
          })
        }
      </Fragment>
    );
  }
}

export default App;
