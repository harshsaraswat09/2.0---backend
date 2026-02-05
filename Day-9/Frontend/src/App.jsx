import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [Notes, setNotes] = useState([]);

  function fetchNotes(){
    axios.get("https://two-0-backend-d3oa.onrender.com/api/notes") 
      .then((res) => {
        setNotes(res.data.notes);
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  

  function handlesubmit(e){
    e.preventDefault()

    const{ title,description } = e.target.elements

    console.log(title.value, description.value);
    
    axios.post("https://two-0-backend-d3oa.onrender.com/api/notes", {
      title: title.value,
      description: description.value
    })
    .then(res=>{
      console.log(res.data)

      fetchNotes()
    })
  }


  function handleDeleteNote(noteId){
    axios.delete("https://two-0-backend-d3oa.onrender.com/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
    
  }


  return (
  <>

  <form className="note-create-form" onSubmit={handlesubmit}>
    <input name="title" type="text" placeholder="Enter Title" />
    <input name="description" type="Enter Description" />
    <button>Create Note</button>
  </form>


    <div className="notes">
      {Notes.map(note => {
        return <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button>
      </div>
      })}
    </div>
  </>)
}

export default App;
