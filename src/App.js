import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";
import impnt from "./notes";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState(impnt);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={note.key || index+1} id={index} note={note} onDelete={deleNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
