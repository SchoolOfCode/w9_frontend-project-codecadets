import React from "react";
import './Journal-Input.css';
/*
Pick the correct element to type into for our journal
Then use state within the function below for a string
Then create a function to catch the string value
*/

function Input( ) {

    return(<div>
           <textarea
                //name="daily-entry"
                //id="entry"
                class="entry-text-box"
                placeholder="What's on your mind today? 💭"
              ></textarea>
    </div> )
}

export default Input;





