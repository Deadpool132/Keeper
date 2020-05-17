import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NoteService from "../services/NoteService"


function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNewNote] = useState();
  
React.useEffect(() => {
  fetch("http://localhost:8080/notes/all")
  .then((res) => res.json())
  .then((data) => {
   setNotes(data);
  });
  }, []);
  

  function addNote(newNote) { 

    NoteService.create(newNote);
  //   NoteService.fetchAll()
  //   .then((res) => res.json())
  //   .then((data) => {
  //    setNotes(data);
  // });
  }

  function deleteNote(id) {
    console.log(id);
    NoteService.remove(id);
  } 

  function updateNote(id){

    // NoteService.findById(8);
      NoteService.findById(8)
        .then(response => {
          setNewNote(response.data);
          console.log(note);
        })
        .catch(e => {
          console.log(e);
        });

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
