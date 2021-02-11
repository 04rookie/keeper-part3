import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notebook, setNotebook] = useState([]);
  function renderData(text) {
    console.log(notebook);
    setNotebook([...notebook, text]);
  }
  function deleteData(id) {
    setNotebook(
      notebook.filter((notes, ids) => {
        return ids !== id;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea renderData={renderData} />
      {notebook.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content}
          deleteData={deleteData}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
