import "./index.css"
import Quotes from "../Quotes";


function Home() {
    return (
        <div>
        <div > 
        <img src="https://cdn.wallpapersafari.com/0/59/YgpXZL.jpg" className="banner-image"/>
        <h1 className="centered"> We are your mindset <h1> </h1>guide 
        during the <h1> </h1>bootcamp. </h1>
         </div>
         <div className="quotes">
        <Quotes /> 
        </div>
        <section>
        <div className="wrapper row images">
          <h4 className="centered-one box-images"> IMPOSTER SYNDROME </h4>
      <img className="column" src="https://static.psycom.net/wp-content/uploads/2020/06/iStock-1136737354.jpg" alt="TedEd"></img>
      <h4 className="centered-two box-images"> OVERWHELMING CODE </h4>
      <img className="column" src="https://images-stylist.s3-eu-west-1.amazonaws.com/app/uploads/2022/02/07124103/managing-anxiety.jpg" alt="Learning" ></img>
      <h4 className="centered-three box-images"> STRESSFUL TIMES </h4>
      <img className="column" src="https://static.psycom.net/wp-content/uploads/2020/07/iStock-1166335598.jpg" alt="Worry less" ></img>
      </div>

        </section>
        <div class="grid-container">

    <div class="grid-child purple">
       <p className="text-paragraph"> 
        Do I belong here? Am I worthy? This is what a person dealing with 
         Imposter syndrome may ask themselves. This internal experience of believing that you 
        are not as competent is common and can be dealt with, watch the video below.
       <a href="https://www.youtube.com/watch?v=ZQUxL4Jm1Lo" className="link-text"> Link to video. </a> 
        </p>

      
    </div>

    <div class="grid-child green">
    <p className="text-paragraph" > 
    Learning to code can be overwhelming, with so many resources online you can fall into 
    the trap of analysis paralysis or procrastinating. This article will assist and support you in your learning journey.
    <a href="https://www.freecodecamp.org/news/how-to-learn-programming/" className="link-text"> Link to article. </a>
     </p>
   
    </div>
    
    <div class="grid-child green">
    <p className="text-paragraph"> While stress symptoms vary widely, odds are good that at some point you’ve experienced occasional physical and emotional 
    distress signals. This article is a great guide to manage stress.
    <a href="https://positivepsychology.com/stress-management-techniques-tips-burn-out/" className="link-text"> Link to article. </a>
    </p>
    
    </div>
  
</div>


        </div>
    )
}

export default Home;
