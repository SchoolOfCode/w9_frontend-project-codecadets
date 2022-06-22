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
  const [journal, setJournal] = useState([
    {
      journalInformation: "",
      author: "",
      id: 1,
    },
  ]); //could this be null ? with a && condition

  function removeJournal() {
    fetch("http://localhost:8000/journal/id" + journal.id, {
      method: "Delete",
    });
  }

  useEffect(() => {
    fetch("http://localhost:3000/journal")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJournal(data);
      });
  }, []); //we cant add removeJournal getting an error

  return (
    <div>
      {journal.map((item) => {
        return (
          <li key={item.id}>
            <h1>{item.journalInformation}</h1>
            <button
              className="btn-main entry-submit-btn"
              onClick={() => removeJournal(item.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
      <Input setJournal={setJournal} journal={journal} />
    </div>
  );
}

export default App;
