import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({ title: "", content: "" });
  function updateText(event) {
    //console.log(event.target);
    const { name, value } = event.target;
    setText({ ...text, [name]: value });
  }
  function updateNotebook(event) {
    //setNotebook([...notebook, text]);
    setText({ title: "", content: "" });
    props.renderData(text);
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
