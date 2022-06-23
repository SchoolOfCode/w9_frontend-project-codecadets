import "./index.css";
import { useState} from "react";

let words = ["I am in the right place at the right time, doing the right thing.", 
"Courage starts with showing up and letting ourselves be seen.", "I am capable.", "Am I good enough? Yes I am.", 
"The perfect moment is this one.", "Your perspective is unique. It's important and it counts.", "You must do the things you think you cannot do.", "I am worthy."]


function Quotes() {
const [quote, setQuote] = useState(["Press the button below to generate a positive quote."]);
const handleClick = (event) => {
setQuote(words[Math.floor(Math.random()*words.length)]);
}



return (
    <div>

    <div className="affirmations"> 
          <p className="quotes box">{quote}</p> 
          </div> 

          <div> 
          <button class="quotesbutton" onClick={handleClick}>Positivity Generator</button>
          </div> 

   </div>
)
} 

export default Quotes;
