import "./index.css";

function Navbar() {

    return (
        <div className="Headers">
                <div>
                    <a className="navbar-brand" href="/Home">
                        <div >
                        <img className="Logo" src={"/projectLogo.jpg"} alt="Logo"></img>
                        </div>
                    </a>    
                </div> 
                    <nav className="navbar">
             <div className="links" >
                     <a class="active" href="http://localhost:3000/Home" className="Home"> Home</a> 
                     <a href="http://localhost:3000/Journal" className="Journal"> Journal </a>
                     <a href="http://localhost:3000/Advice" className="Advice"> Advice </a>
                     <a href="http://localhost:3000/About" className="About"> About </a>      
             </div>
             </nav>
        </div>
    )
}

export default Navbar;
