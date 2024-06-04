import { useEffect, useState } from "react"
import AddNote from "./components/AddNote"
import Nav from "./components/Nav"
import Note from "./components/Note"
import Intro from "./components/Intro"




const App = () => {
//define state
const [notes,setNotes] = useState([]);
const [loading,setLoading]= useState(false);
const [error,setError] = useState(null);
//get notes when start
useEffect(()=>{
  getNotes()
},[]);

  //get notes
  const getNotes =async ()=>{
    setLoading(true);
    try{
      const response = await fetch('https://fire-noteapp-2024-default-rtdb.firebaseio.com/notes.json')
      if(!response.ok){
        throw new Error("Cannot contact to the database!")
      }
      const notes = await response.json();
   const modifiedNote = [];

   for(const key in notes){
      modifiedNote.push({
        id : key,
        note :notes[key]});
   }
   setNotes(modifiedNote);
    }catch(err){ 
      setError(err.message);
    }
     setLoading(false);
  }
   
 //App 
  return (
  <section>
    <Nav totalNotes={notes.length}/>
    
     {loading && !error && <p className="loadingMessage">Getting notes...</p>}
     {error && !loading && <p className="loadingMessage error">{error}</p>}
     
     {
      !loading && !error && (<>
      <AddNote getNotes ={getNotes}/>
      {
        notes.map((note,index)=>(
          <Note key={index} note={note} getNotes={getNotes}/>
        ))
       }</>)
     }
     {
      notes.length === 0 && 
      <Intro/>
     }
 
  </section>
)
}

export default App