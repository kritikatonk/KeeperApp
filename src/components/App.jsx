import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItems, setNoteItems] = useState([]);
  function addNote(note) {
    // Note In being Received here

    setNoteItems((prevNoteItems) => {
      return [...prevNoteItems, note];
    });
  }

  function deleteNote(id) {
    setNoteItems((prevNoteItems) => {
      return prevNoteItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // console.log(noteItems);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {noteItems.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
