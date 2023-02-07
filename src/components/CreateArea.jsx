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
    // returning the previous object with changing the new property only changed property is changed
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
        {/* when titel is clicked trigger the expand function 
        when user writes something trigger handleChange and when user clicks Enter for that 
        submitViaEnter */}
        <input
          onClick={expand}
          onChange={handleChange}
          name="title"
          placeholder="Title Here"
          value={note.title}
          onKeyDown={submitViaEnter}
        />
        {/* show textArea input only when user clicks means isExp becomes true */}
        {isExp && (
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Write a note here..."
            rows={3}
            value={note.content}
            onKeyDown={submitViaEnter}
          />
        )}

        {/* imported icons from material-UI */}
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
