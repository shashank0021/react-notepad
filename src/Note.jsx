import React from 'react';


function Note({ index, title, delNote, changeCurrent }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <button className="icon-button delete-button" onClick={() => delNote(index)}>
        <i className="fas fa-trash"></i> Delete
      </button>
      <button className="icon-button edit-button" onClick={() => changeCurrent(index)}>
        <i className="fas fa-edit"></i> Edit
      </button>
      <hr />
    </div>
  );
}

export default Note;