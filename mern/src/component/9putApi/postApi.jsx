import React from "react";
import { useState } from "react";

function PostData(props) {
  let [getTitle, setTitle] = useState();
  let [getTextArea, setTextAre] = useState();
  const hendelInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const hendelInputTextArea = (event) => {
    setTextAre(event.target.value)
  };

  const data = {
    title: getTitle,
    textArea: getTextArea
  }
  return (
    <div className="form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title {props.data}
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
          onChange={hendelInputTitle}
          value={props.title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={hendelInputTextArea}
          value={props.textArea}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success" onClick={()=> props.post(data)}>
        Success 
      </button>
    </div>
  );
}

export default PostData;
