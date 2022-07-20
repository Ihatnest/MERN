import React,{ Component,Fragment } from 'react';
import ApiGET from './apiGET';
import PostData from './postApi';
import axios from 'axios'
class App extends Component {
  state = {
    data: [],
    dataUpdate: undefined
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
    if (data !== undefined) {
      this.setState({
        dataUpdate: {
          title: data.title,
          textArea: data.textArea,
          id: data.id
        }
      })
      console.log(data.id)
    } else {
      this.setState({
        dataUpdate: undefined
      })
    }
  }

  hendlePut = (data) => {
    let isi = this.state.dataUpdate
    console.log(this.state.dataUpdate.title)
    axios.put(`http://localhost:3004/posts/${isi}`).then((req) => {
      this.connectApi()
    })
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
    if (this.state.dataUpdate === undefined) {
      post = <PostData post={this.hendlePost} button={'Save'}/>
    } else {
      post = <PostData post={this.hendlePut} title={this.state.dataUpdate.title} textArea={this.state.dataUpdate.textArea} button={'Update'}/>
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
