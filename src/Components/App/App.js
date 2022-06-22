import React from "react";
import Input from "../Journal-Input/Journal-Input";
import { useState } from "react";

function App() {
  const [journal, setJournal] = useState([
    {
      journalInformation: "",
      author: "",
      id: 1,
    },
  ]);

  console.log(journal);

  function removeJournal(id) {
    const filterJournal = journal.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });

    setJournal(filterJournal);
  }

  return (
    <div>
      {journal.map((item) => {
        return (
          <li key={item.id}>
            <h1>{item.journalInformation}</h1>
            <button
              class="btn-main entry-submit-btn"
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
