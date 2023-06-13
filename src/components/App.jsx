import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, updateArray] = useState([]);
  function addNote(note) {
    updateArray((prevValue) => {
      return [...prevValue, note];
    });
  }
  function handleDelete(id) {
    updateArray((prevItems) => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            doDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
