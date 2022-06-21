import React from "react";
//import './Journal-Input.css';
import { useState } from 'react';
/*
Pick the correct element to type into for our journal..done
Then use state within the function below for a string...already in text area content
Then create a function to catch the string value
*/


function Input({setJournal, journal}) {

  const [text, setText] = useState(" ");

 function update (e) {
 setText(e.target.value) //invoking not declaring!
 }
console.log(text);

    return(<div>
          <textarea
                name="daily-entry"
                value={text}
                className="entry-text-box"
                placeholder="What's on your mind today? 💭"
                onChange={update}
              ></textarea>
              
              <button onClick={()=>setJournal([...journal, {journalInformation:text, id: Math.floor(Math.random()*1000)}])}>Add Journal</button>
    </div> )
}

export default Input;





