import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from '@material-ui/icons/Update';

function Note(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleUpdate(){
    props.onUpdate(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleUpdate}>
        <UpdateIcon />
      </button>
      <button onClick={handleClick}>
         <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
