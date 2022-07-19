import React from "react";
import "./style.css";
function apiGET (props){
    return(
      <div className="card card1">
        <img src="http://placeimg.com/300/200/tech" className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.textArea}</p>
          <button href="q" className="btn btn-primary" onClick={()=> props.delete(props.data.id)}>delete</button>
        </div>
      </div>
    )
}

export default apiGET;