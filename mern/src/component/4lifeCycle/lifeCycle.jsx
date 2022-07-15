import React,{ Component } from "react";


class lifeCycle extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }
  }
  
  render(){
    return(
      <div>
        <button>tombol 1</button>
      </div>
    )
  }
}

export default lifeCycle;