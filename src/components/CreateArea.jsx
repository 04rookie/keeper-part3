import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({ title: "", content: "" });
  const [notebook, setNotebook] = useState([]);
  function updateText(event) {
    //console.log(event.target);
    const { name, value } = event.target;
    setText({ ...text, [name]: value });
  }
  function updateNotebook(event) {
    setNotebook((prevNote) => {
      return [...prevNote, text];
    });
    console.log(notebook);

    setText({ title: "", content: "" });
    props.renderData(notebook);
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={props.updateNotebook}>
        <input
          onChange={updateText}
          name="title"
          value={text.title}
          placeholder="Title"
        />
        <textarea
          onChange={updateText}
          name="content"
          value={text.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={updateNotebook}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
