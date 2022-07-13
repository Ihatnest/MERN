import React, { Component } from "react";
import TestProps from "../2props";

class home extends Component {
  render() {
    return (
      <div>
        <TestProps umur="20" kelas="1" />
        <TestProps nama="sapu" umur="12" kelas="3" />
        <TestProps nama="ihat" umur="22" kelas="2" />
      </div>
    );
  }
}

export default home;

// jadi ini dimana pendefinisian setiap props yang di buat di file props