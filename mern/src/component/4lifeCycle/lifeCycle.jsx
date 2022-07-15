import React, { Component } from "react";
import "./style.css";

class lifeCycle extends Component {
  // jadi ini bearawal dari constructor lalu ke bawah yang getDerivedStateFromProps
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  // jadi di sini getDerivedStateFromProps akan memiliki paremeter props, state
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  // dan berhenti di sini dia tidak akan eksekusi code di bawah ini karena  shouldComponentUpdat itu yang dijalankan dulu jadi jika nilai dia true dan flase kalo true dia akan update data nya jika flase tidak akan di update data nya. jadi kita beri time out agar lebih terlihat terjadi nya, jadi gino setelah 3 detik upadate count nya dan shouldComponentUpdate pun return true maka terjadi lah update
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 5000);
  }
  // jadi shouldComponentUpdate dulu yang dijalankan baru yang atas jadi dia nanya perlu ngga update kalo perlu retun true jika tidak flase lalu render jadi ada terjadi dua kali render pertama saat tombol 1 ke 2 saat tombol 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  // di sini dia menangkap nilai props dan state sebelum nya lalu di gunakan di life cycle componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  // lalu disini dia akan update component nya di life cycle sini, jadi di sini component telah berhasil di update
  componentDidUpdate(prevProps, prevtState, sanpshot) {
    console.log("componentDidUpdate");
  }
  // life cycle ini akan aktif ketika ada componnt yang di tarik atau hilang
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
  render() {
    console.log('render')
    return (
      <div>
        <button type="button " className="btn btn-success tombol">
          tombol {this.state.count}
        </button>
      </div>
    );
  }
}

export default lifeCycle;
