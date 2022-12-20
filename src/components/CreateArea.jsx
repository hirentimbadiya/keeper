import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [isExp, setExp] = useState(false);

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

  const expand = () => {
    setExp(true);
  };
  return (
    <div>
      <form className="create-note">
        {isExp && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title Here"
            value={note.title}
            onKeyDown={submitViaEnter}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Write a note here..."
          rows={isExp ? 3 : 1}
          value={note.content}
          onKeyDown={submitViaEnter}
        />
        <Zoom in={isExp}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
