import React, { useState } from 'react'

const AddNote = ({getNotes}) => {

  const [note,setNote] = useState("");//define state


    // add new note
    const addNote = async (e) =>{
      e.preventDefault();
      if(note.trim().length === 0){
        alert("Please enter an valid note.")
        return;
      }
      try{
        await fetch('https://fire-noteapp-2024-default-rtdb.firebaseio.com/notes.json',
        {
          method: "Post",
          body: JSON.stringify(note),
          headers: {
           "Content-Type": "application/json",
          },
         }
        );
         setNote("");
         getNotes();
         
      }
      catch(err){
          alert("somethng went wrong.Try again later.");
      }
    };
  return (
    <section>
    <form className="card" onSubmit={addNote}>
        <input type="text" 
        placeholder='add note here' 
        value={note}
         onChange={e => setNote(e.target.value)}/>
        <button className='submit-btn'>Add note</button>

    </form>

    </section>
  )
}

export default AddNote