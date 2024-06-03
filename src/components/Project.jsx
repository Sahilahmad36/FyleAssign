import React from "react";
import pexel1 from "../asset/pexel1.jpg"
import "./Project.css";
function Project() {
  return (
    <div className="project">
    <div className="our">
    <h1>OUR PROJECT</h1>
    </div>
    <div className="why">
     WHY WE ARE BEST
    </div>
    <div className="split-screen">
    <div className="right-pane">
           <img src={pexel1} alt="free" className="image"/>
          </div>
          <div className="inline">
          <div className="box">
            <div className="horizontal-card">
                <div className="card-content">
                    <h2 className="card-title">Card Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="horizontal-card">
                <div className="card-content">
                    <h2 className="card-title">Card Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="horizontal-card">
                <div className="card-content">
                    <h2 className="card-title">Card Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    
  )
}

export default Project
