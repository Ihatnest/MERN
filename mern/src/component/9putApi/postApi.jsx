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
    body: getTextArea,
    // ido: new Date().getTime()
  }
  return (
    <div className="form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
          onChange={hendelInputTitle}
          defaultValue={props.title}
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
          defaultValue={props.body}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success" onClick={()=> props.post(data)}>
        {props.button}
      </button>
      <button type="hidden" className="btn btn-danger ms-1" onClick={()=> props.cancel(data.status=false)}>Cancel</button>

    </div>
  );
}

export default PostData;
