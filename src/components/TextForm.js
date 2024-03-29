import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //This is a function to make every first letter of word in capital
  const capitalFirstLetter = () => {
    let words = text.split(" ");
    let uppercaseword = "";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
    props.showAlert(
      "First letter of each word is converted to capital",
      "success"
    );
  };

  const clearText = () => {
    setText("");
    props.showAlert("Clear all text", "success");
  };

  const handleCopy = () => {
    // let text = document.getElementById("mybox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    // .then(() => {
    //   alert("successfully copied");
    // })
    // .catch(() => {
    //   alert("something went wrong");
    // });
    document.getSelection().removeAllRanges();
    props.showAlert("Texts are copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the text
  // setText("new text"); //Correct way to change the text
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-5">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042738",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={capitalFirstLetter}
        >
          Capital First Letter
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <strong>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
        </strong>
        <strong>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read
          </p>
        </strong>
        <h2>Preview</h2>
        <strong>
          <p>{text || "Nothing to preview"}</p>
        </strong>
      </div>
    </>
  );
}
