
const text = {
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

function Text() {
  return (
      <div className="Content" key={text.id}>
      <h2 className="Intro">Whatever you’re feeling, previous bootcampers have felt it before.<br></br><br></br> We spoke to the people who have walked in your shoes and asked for their advice on how to manage the School of Code experience. Here's what they had to say.</h2>
      <div className="RectangleOne">
      <img className="ImgOne" src="https://images.unsplash.com/photo-1616084403156-9ae114afa6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=507&q=80" alt="Man"></img>
      <p className="TextOne">{text.text}</p>
      </div>
      <div className="RectangleTwo">
      <p className="TextTwo">{text.text}</p>
      <img className="ImgTwo" src="https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Woman"></img>
      </div>
      <div className="RectangleThree">
      <img className="ImgThree" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Woman"></img>
      <p className="TextThree">{text.text}</p>
      </div>
      </div>
    )
};

export default Text;