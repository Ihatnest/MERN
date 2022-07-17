import React from "react";
import { useState } from "react";

function PostData(props) {
  let [getTitle, setTitle] = useState( );
  let [getTextArea, setTextAre] = useState();

  const hendelInputTitle = (event) => {
    setTitle(event.target.value);
  };
  const hendelInputTextArea = (event) => {
    setTextAre(event.target.value);
  };
  const data = {
    title: getTitle,
    textArea: getTextArea
  }
  return (
    <div className="form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title {getTitle}
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
          onChange={hendelInputTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea {getTextArea}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={hendelInputTextArea}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success" onClick={()=> props.post(data)}>
        Success 
      </button>
    </div>
  );
}

export default PostData;
