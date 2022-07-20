import React,{ Component,Fragment } from 'react';
import ApiGET from './apiGET';
import PostData from './postApi';
import axios from 'axios'
class App extends Component {
  state = {
    data: [],
    dataUpdate: {
      status: false
    }
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
    if (data.status) {
      this.setState({
        dataUpdate: {
          title: data.title,
          body: data.body,
          id: data.id,
          status: true
        }
      })
    } else {
      this.setState({
        dataUpdate: {
          title: '',
          body: '',
          id: 1,
          status: false
        }
      })
      this.connectApi()
    }
  }

  hendlePut = (data) => {
    if (data.title === undefined) {
      data.title = this.state.dataUpdate.title
    }
    if (data.body === undefined) {
      data.body = this.state.dataUpdate.body
    }
    axios.put(`http://localhost:3004/posts/${this.state.dataUpdate.id}`,data).then((req) => {
      this.connectApi()
      this.setState({
        dataUpdate: {
          title: '',
          body: '',
          id: 1,
          status: false
        }
      })
    })
  }

  hendleCancel = (data) => {
    this.setState({
      dataUpdate: {
        status: data
      }
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
    if (!this.state.dataUpdate.status) {
      post = <PostData post={this.hendlePost} button={'Save'} title={''} body={''} />
    } else {
      post = <PostData post={this.hendlePut} title={this.state.dataUpdate.title} body={this.state.dataUpdate.body} button={'Update'} cancel={this.hendleCancel} />
    }
    return (
      <Fragment>
        {post}
        {
          this.state.data.map(data => {
            return <ApiGET key={data.id} data={data} delete={this.hendleDelete} update={this.hendleUpdate} cancel={this.hendleCancel} />
          })
        }
      </Fragment>
    );
  }
}

export default App;
