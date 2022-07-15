import "./style.css";
import React, { Component } from "react";
import LifeCycle from "./lifeCycle";
class Header extends Component {
  state = {
    countt: true,
  };
  // jadi ini buat mancing untuk menarik sebuah component agar tejadi life cycle componentWillUnmount jadi ketika countt true maka akan mengirimkan <LifeCycle /> dan ketika flase maka akan mengubah <LifeCycle /> menjadi null
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        countt: false
      })
    },15000)
  }

  render(){
    return (
      <div>
        {
          this.state.countt?<LifeCycle />:null
        }
      </div>
    );
  }
};

export default Header;
