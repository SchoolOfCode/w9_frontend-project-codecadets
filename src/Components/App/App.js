import React from "react";
import Input from "../Journal-Input/Journal-Input";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../Home";


function App() {
  const [journal, setJournal] = useState([]); //could this be null ? with a && condition



  function removeJournal(id) {
    fetch(`http://localhost:5000/journal/${id}`,{
      method: 'Delete'
    })
  }

  function addJournal(journal_entry) {
    fetch('http://localhost:5000/journal',{
      method: 'Post'
    })
  }

  useEffect (()=> { 
    fetch('http://localhost:5000/journal')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      setJournal(data.data);
    })
    }, []); //we cant add removeJournal getting an error



  return (
   
    <div>
       <Router> 
        <Switch> 
          <Route exact path="/Home"> 
            <Home />
          </Route>
        </Switch>
    
        
        
        <Switch> 
        <Route path="/"> 
      {journal.map((item) => {
        return (
           <li key={item.journal_id}>
            <h1>{item.journal_entry}</h1>
            <button
              className="btn-main entry-submit-btn"
              onClick={() => removeJournal(item.journal_id)}
            >
              Delete
            </button>
          </li>
        );
      })}
      <Input setJournal={setJournal} journal={journal} />
      </Route>
      </Switch>
     
      </Router>
    </div>
  
  );
}

export default App;
