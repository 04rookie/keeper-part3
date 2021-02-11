import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [mainCopy, setMainCopy] = useState([]);
  function renderData(notebook) {
    console.log(notebook);
    setMainCopy([...mainCopy, notebook]);
  }
  return (
    <div>
      <Header />
      <CreateArea renderData={renderData} />
      {mainCopy.map((notes, index) => (
        <Note key={index} title={notes.title} content={notes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
