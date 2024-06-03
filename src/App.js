import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SwiperComponent from "./components/Slider";
import Project from "./components/Project";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
    <Home />
    <Contact />
   <SwiperComponent />
   <Project />
   <CardContainer />
    </div>
  );
}

export default App;
