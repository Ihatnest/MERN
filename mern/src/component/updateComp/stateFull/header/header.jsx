import "./style.css";
import React from "react";
import Update from "../card/Update";
import { useState } from "react";

function Header() {
  const [getIsi,setIsi] = useState(0)
  function update (data) {
    setIsi(data + 1)
  };
  return (
    <div className="container">
      <div className="header">keranjang {getIsi}</div>
      <Update
        getData={(value) => {update(value)}}
      />
    </div>
  );
}

export default Header;
