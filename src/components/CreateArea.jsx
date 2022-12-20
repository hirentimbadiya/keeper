import React, { useState } from "react";

function CreateArea(props) {
  // for tracking the text entered by user
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // when user types something it triggers and updates the value of title and content
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // when user clicks Add button it triggers and via props it calls onAddNote which will
  // call the addNote function to add note to notes array
  const submitNote = (event) => {
    props.onAddNote(note);

    // after adding the note set the title and content to ""
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  // same call when user clicks enter button
  const submitViaEnter = (e) => {
    props.onAddNoteEnter(e, note);
    if (e.key === "Enter") {
      setNote({
        title: "",
        content: "",
      });
      e.preventDefault();
    }
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title Here"
          value={note.title}
          onKeyDown={submitViaEnter}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Write a note here..."
          rows="3"
          value={note.content}
          onKeyDown={submitViaEnter}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
