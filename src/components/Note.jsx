import React from 'react'
import DeleteIcon from '../svgs/DeleteIcon'

const Note = ({note , getNotes}) => {
  //destructure note object
  const {note: text, id} = note;
  //delete note
  const deleteNote = async() =>{
     try{
      const response = await fetch(`https://fire-noteapp-2024-default-rtdb.firebaseio.com/notes/${id}.json`,
      {
      method: "DELETE",
       }
      );
        if (!response.ok){
            throw new Error("Failed to delete this note");
        }
        getNotes();
      }catch(err){
          alert(err.message)
      }
    
  }

  return (
    <div className='card card-ctr'>
        <h3>+ {text}</h3>
        <div onClick={deleteNote}>
        <DeleteIcon />
        </div>
    </div>
  )
}

export default Note