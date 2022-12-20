import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
      // onclick it triggers the onRemoveNote which is in App.jsx 
      // which essentially will trigger removeNote function to remove the note
        onClick={() => {
          props.onRemoveNote(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Note;
