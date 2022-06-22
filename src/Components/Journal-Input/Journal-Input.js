import React from "react";
import "./Journal-Input.css";
import { useState } from "react";
/*
Pick the correct element to type into for our journal..done
Then use state within the function below for a string...already in text area content
Then create a function to catch the string value
*/

function Input({ setJournal, journal }) {
  const [text, setText] = useState(" ");

  function update(e) {
    setText(e.target.value); //invoking not declaring!
  }
  console.log(text);

  return (
    <div>
      <header>
        <h1 class="title">My Personal Journal</h1>
      </header>
      <textarea
        name="daily-entry"
        value={text}
        className="entry-text-box"
        placeholder="What's on your mind today? 💭"
        onChange={update}
      ></textarea>

      <button
        class="btn-main entry-submit-btn"
        onClick={() =>
          setJournal([
            ...journal,
            { journalInformation: text, id: Math.floor(Math.random() * 1000) },
          ])
        }
      >
        Add to Journal
      </button>
    </div>
  );
}

export default Input;
