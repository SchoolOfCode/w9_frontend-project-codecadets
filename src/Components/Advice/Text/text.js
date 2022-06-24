const text = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

function Text() {
  return (
    <div className="Content" key={text.id}>
      <h2 className="Intro">
        Whatever you're feeling, previous bootcampers have felt it before.
        <br></br>  We spoke to the people who have walked in your shoes and asked <br></br>
        for their advice on how to manage the School of Code experience. <br></br> Here's
        what they had to say.
      </h2>
      <div className="RectangleOne">
        <img
          className="ImgOne"
          src="https://images.unsplash.com/photo-1616084403156-9ae114afa6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=507&q=80"
          alt="Man"
        ></img>
        <p className="TextOne">
          Q. How do you deal with imposter syndrome? <br></br>
          <br></br>
          A. "Focus on measuring your own achievements instead of holding them up
          against others'. Comparing your own life to a carefully curated
          influencer's social media feed, for example, is a trap for feeling
          like you don't measure up. Turn imposter syndrome on its head:
          Remember that smart, high-achieving people most often deal with
          imposter syndrome. So, the very fact that you recognize it in yourself
          says a lot about you." <br></br> - Yasin Ahmed
        </p>
      </div>
      <div className="RectangleTwo">
        <p className="TextTwo">
          Q. Should I be using Google to help me code? <br></br>
          <br></br>A. "If you're someone who turns to Google for help when you're
          stuck, you might think this means you'll never cut it as a developer.
          Wrong! You've just stumbled upon the #1 tool in the professional
          developer's toolbox. Even coding tests in many technical interviews
          will allow you to search with Google. The syntax, keywords, and
          methods of programming languages are hard to remember, but as long as
          you know where to look for the answer, you're on the right path." <br></br>
           - Rachel Smith {" "}
        </p>
        <img
          className="ImgTwo"
          src="https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="Woman"
        ></img>
      </div>
      <div className="RectangleThree">
        <img
          className="ImgThree"
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Woman"
        ></img>
        <p className="TextThree">
          Q. What advice would you give to a woman just getting into computer
          programming?<br></br>
          <br></br>A. "Know that every single person in the room has experienced
          imposter syndrome. Also, connect with other women engineers to talk to
          professionally and personally. Networking is a necessary evil. Find
          good mentors." <br></br> - Sara Knight
        </p>
      </div>
    </div>
  );
}

export default Text;