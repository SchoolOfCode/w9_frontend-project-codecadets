import "./index.css";
import banner from "../../../assets/banner-image.jpg"
import Quotes from "../Quotes";


function Home() {
    return (
        <div>
        <div > 
        <img src={banner} className="banner-image"/>
        <h1 className="centered"> We are your mindset <h1> </h1>guide 
        during the <h1> </h1>bootcamp. </h1>
         </div>
         <div className="quotes">
        <Quotes /> 
        </div>
        <section>
        <div className="wrapper row">
      <img className="column" src="https://ed.ted.com/teded-logo-1200-670.png" alt="TedEd"></img>
      <a href="https://www.youtube.com/watch?v=ZQUxL4Jm1Lo"> Link to video. </a>
      <img className="column" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Learning" ></img>
      <a href="https://www.freecodecamp.org/news/how-to-learn-programming/"> Link to article. </a>
      <img className="column" src="https://images.unsplash.com/photo-1607827448452-6fda561309d0?ixlib=rb-1.2.1&ixid=MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" alt="Worry less" ></img>
      <a href="https://positivepsychology.com/stress-management-techniques-tips-burn-out/"> Link to article. </a>
      </div>

        </section>


        </div>
    )
}

export default Home;
