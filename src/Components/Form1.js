import React, { useState } from "react";

export default function Form1(props) {
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!','success');
  };
  const handleLoClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!','success');
  };
  const handleonChange = (event) => {
    //  console.log("on change");
    setText(event.target.value);
  };
  const handletoClick = (event) => {
    //  console.log("on change");
    setText(' ');
  };

  const [text, setText] = useState(" Enter your text:-");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black' }}
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="Mybox"
          rows="8"
        ></textarea>
      </div >
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handletoClick}>
        Clear Text
      </button>
    </div>

    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text:"Enter something to preview "}</p>

    </div>
    </>
  )
}
