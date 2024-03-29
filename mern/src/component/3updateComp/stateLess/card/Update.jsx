import "./style.css";
import React from "react";
import { Component } from "react";
import logo from "../../../../logo.svg";
// jadi ini adalah cara update data di parent menggunakan state les 
class update extends Component { 
  state = {
    count: 0,
  };

  handleError = (event) => {
    this.setState({
      count: event.target.value,
    });
  };

  dataUpdate = (value) => {
    this.props.getData(value)
  }

  tambah = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count)
    this.dataUpdate(this.state.count + 1)
  };

  kurang = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
      console.log(this.state.count)
      this.dataUpdate(this.state.count - 1)
    }
  };

  render() {
    return (
      <div className="card">
        <span className="count">{this.state.count}</span>
        <img src={logo} className="card-img-top" alt="sapi" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
          <button
            type="button"
            className="btn btn-primary d-inline"
            onClick={this.kurang}
          >
            -
          </button>
          <span
            className=" input"
            placeholder="Search..."
            onChange={this.handleError}
          >
            {this.state.count}
          </span>
          <button
            type="button"
            className="btn btn-primary d-inline"
            onClick={this.tambah}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default update;
