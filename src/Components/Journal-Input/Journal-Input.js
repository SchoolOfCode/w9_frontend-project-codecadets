import React from "react";
import "./Journal-Input.css";
import { useState } from "react";



function Input({ setJournal, journal }) {
  const [text, setText] = useState(" ");

  function update(e) {
    setText(e.target.value); //invoking not declaring!
  }
  console.log(text);

  
  return (
    <div>
      <header>
        <h1 className="title">My Personal Journal</h1>
      </header>
      <form> 
      <textarea
        name="daily-entry"
        value={text}
        className="entry-text-box"
        placeholder="What's on your mind today? 💭"
        onChange={update}
      ></textarea>
      </form>

      <button
        className="btn-main entry-submit-btn"
        onClick={() =>
          setJournal([
            ...journal,
            {journal_entry: text},
          ])
        }
      >
        Add to Journal
      </button>
    </div>
  );
}

export default Input;
