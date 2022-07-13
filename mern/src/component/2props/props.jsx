import React from "react";

function testProps(props) {
  return (
    <div>
      <ul>
        <li>nama: {props.nama}</li>
        <li>umur: {props.umur}</li>
        <li>kelas: {props.kelas}</li>
      </ul>
    </div>
  );
}

testProps.defaultProps = {
  nama: "undefined"
}
// jadi ini kita bisa juga buat nilai default dari setiap props agar ketika ketika kita tidak mendefinikan setiap yang di panggil component nya di home

export default testProps;

// jadi ini pengunaan props jadi kita bisa mepermudah pengisian nya 