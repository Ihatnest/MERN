import React from "react";
import "./style.css";
function apiGET (props){
  
  let data = {
    title: props.data.title,
    body: props.data.body,
    id: props.data.id,
    status: true
    // ido: props.data.ido,
  }
    return(
      <div className="card card1">
        <img src="http://placeimg.com/300/200/tech" className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.body}</p>
          <button className="btn btn-primary" onClick={()=> props.update(data)}>Update</button>
          <button className="btn btn-danger ms-1" onClick={()=> props.delete(data.id)}>delete</button>
          
        </div>
      </div>
    )
}

export default apiGET;