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
      <textarea
        name="daily-entry"
        value={text}
        className="entry-text-box"
        placeholder="What's on your mind today? 💭"
        onChange={update}
      ></textarea>

      <button
        className="btn-main entry-submit-btn"
        onClick={() =>
          setJournal([
            ...journal,
            { journalInformation: text, id: Math.floor(Math.random() * 1000) },
          ])
        }
      >
        Add to Journal
      </button>
      <section class="section sectionEntryResults" id="entryResultsSection">
        <div class="container">
          <div class="container-row entryResultRow"></div>
        </div>
      </section>
      <script src="index.js"></script>
    </div>
  );
}

export default Input;
