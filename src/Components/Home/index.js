import "./index.css";
import banner from "../../assets/banner-image.jpg"

function Home() {
    return (
        <div>
        <div > 
        <img src={banner} className="banner-image"/>
        <h1 className="centered"> We are your mindset <h1> </h1>guide 
        during the <h1> </h1>bootcamp. </h1>
         </div>
        </div>
    )
}

export default Home;