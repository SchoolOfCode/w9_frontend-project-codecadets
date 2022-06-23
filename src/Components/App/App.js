import React from "react";
import Input from "../Journal-Input/Journal-Input";
import { useState, useEffect } from "react";


/* use effect download at the top to use.@

use the hook in the function above the component
to use the hook we have to type useEffect () with a argument so with a dependenacy array

useEffect (()=> { 
console.log 'useEffect ran'; 
}, []);


what do we add to useEffect array as a state value to allow the use effect to monitor ? the state of a journal being posted and button to delete.

JSON
make a data folder in src level
Make a db file called db.json in the data folder
Make a fake journal from the use state we already have as a dummy




*/



function App() {
  const [journal, setJournal] = useState([]); //could this be null ? with a && condition
 
    function removeJournal(id) {
    fetch(`http://localhost:5000/journal/${id}`,{
      method: 'Delete'
    })
    console.log(journal);
    let newfilterjournal = journal.filter((item)=>{
      console.log(item);
      return item.journal_id !== id
        })
        console.log(newfilterjournal);
    setJournal(newfilterjournal)
  }

  async function addJournal(journal_entry) {
    
    getJournal()
    const dataPost = journal_entry[journal.length];
    console.log(journal_entry);
    console.log(dataPost);
    const response = await fetch('http://localhost:5000/journal',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(dataPost) // body data type must match "Content-Type" header
  });
  const data = await response.json();
  console.log(data);
  }

  async function getJournal(){
fetch('http://localhost:5000/journal')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      setJournal(data.data);
    })
  }
  useEffect (()=> { 
    getJournal()
    }, []); //we cant add removeJournal getting an error

  

  return (
    <div>
      {journal.map((item) => {
        return (
           <li key={item.journal_id}>
            <h1>{item.journal_entry}</h1>
            <button
              className="btn-main entry-submit-btn"
              onClick={() => removeJournal(item.journal_id)}>
              Delete
            </button>
          </li>
        );
      })}
      <Input setJournal={addJournal} journal={journal} />
    </div>
  );
}

export default App;
