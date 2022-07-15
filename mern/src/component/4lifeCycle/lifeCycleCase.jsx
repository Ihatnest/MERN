import React, { Component } from "react";
import "./style.css";

class lifeCycleCase extends Component {

  // jadi disini ada sebagin yang sudah awak hapus life cycle nya dan  menurut awak life cycle yang sering digunakan yang awak masukan
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
      this.setState({
        count: this.state.count,
      });
  }
  // jadi kita memanfaat kan ini untuk kejadian sesuatu maka update akan di hentikan, jadi ketika this.state.count >= 5 maka akan return false trus akan tidak di update update component nya
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if(this.state.count >= 5){
      return false
    }
    return true;
  }
  componentDidUpdate(prevProps, prevtState, sanpshot) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }


  clickBUtton = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <button type="button " className="btn btn-success tombol" onClick={this.clickBUtton}>
          tombol {this.state.count}
        </button>
      </div>
    );
  }
}

export default lifeCycleCase;
