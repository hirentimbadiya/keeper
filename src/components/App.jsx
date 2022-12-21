import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);


  // function for adding the note to the notes Array 
  const addNote = (note) => {
    if (note.title === "" && note.content === "") {
      return;
    }
    setNotes((prev) => {
      return [...prev, note];
    });
  };

  // adding note to the notes array when user clicks enter on keyboard
  const addNoteEnter = (e, note) => {
    if (e.key === "Enter") {
      addNote(note);
    }
  };

  // removing note from the notes array when user clicks delete button
  const removeNote = (id) => {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      {/* this contains inputs and add button */}
      <CreateArea onAddNote={addNote} onAddNoteEnter={addNoteEnter} />

      {/* it displays the content of the Array of object in note */}
      {notes.map((item, index) => {
        return (
          // when user clicks delete button it triggers removeNote function
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onRemoveNote={removeNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
