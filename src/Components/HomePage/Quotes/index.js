import "./index.css";
import { useState} from "react";

let words = ["I am in the right place at the right time, doing the right thing.", 
"Courage starts with showing up and letting ourselves be seen.", "Make way for the unprecedented and watch your reality rearrange yourself.", "Am I good enough? Yes I am.", 
"The perfect moment is this one.", "Your perspective is unique. It's important and it counts.", "You must do the things you think you cannot do."]


function Quotes() {
const [quote, setQuote] = useState(["Press button to generate a positive quote."]);
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
