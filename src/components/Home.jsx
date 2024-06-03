import React from "react"
import "./home.css";
import girl from "../asset/girl.jpg";
function Home() {
    return (
        <div>
        <nav className="navbar">
      
      </nav>
         <div className="split-screen">
          <div className="left-pane">
            <h1 className="award">AWARD WINNING</h1>
            <h1 className="digital">DIGITAL MARKETING<br /> AGENCY</h1>
            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div>
                <button className="button">Contact US</button>
            </div>
          </div>
          <div className="right-pane">
           <img src={girl} alt="free" className="image"/>
          </div>
        </div>
        </div>
       
      );
}

export default Home
