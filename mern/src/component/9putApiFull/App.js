import React,{ Fragment,useState } from 'react';
import ApiGET from './apiGET';
import PostData from './postApi';
import axios from 'axios'




function App() {
  const [getDAta,setData] = useState([])
  const connectApi = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((data) => {
        setData(data.data)
      })
  }

  const hendlePost = (data) => {
    axios.post('http://localhost:3004/posts',data).then((req) => {
      connectApi()
      return false;
    })
  }

  const [getUpdate,setUpdate] = useState({
    dataUpdate: {
      status: false
    }
  })
  const hendleUpdate = (data) => {
    if (data.status) {
      setUpdate({
        dataUpdate: {
          title: data.title,
          body: data.body,
          id: data.id,
          status: true
        }
      })
    } else {
      setUpdate({
        dataUpdate: {
          status: false
        }
      })
      connectApi()
    }
  }

  const hendlePut = (data) => {
    if (data.title === undefined) {
      data.title = this.state.dataUpdate.title
    }
    if (data.body === undefined) {
      data.body = this.state.dataUpdate.body
    }
    axios.put(`http://localhost:3004/posts/${this.state.dataUpdate.id}`,data).then((req) => {
      connectApi()
      setUpdate({
        dataUpdate: {
          status: false
        }
      })
    })
  }

  const hendleCancel = (data) => {
    setUpdate({
      dataUpdate: {
        status: false
      }
    })
  }

  const hendleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((req) => {
      connectApi()
    })
  }

  function componentDidMount() {
    connectApi()
  }
  componentDidMount()

  let post
  if (!getUpdate.status) {
    post = <PostData post={hendlePost} button={'Save'} title={''} body={''} />
  } else {
    post = <PostData post={hendlePut} title={getUpdate.title} body={getUpdate.body} button={'Update'} cancel={hendleCancel} />
  }
  
  return (
    <Fragment>
      {post}
      {
        getDAta.map(data => {
          return <ApiGET key={data.id} data={data} delete={hendleDelete} update={hendleUpdate} cancel={hendleCancel} />
        })
      }
    </Fragment>
  );
}

export default App;
