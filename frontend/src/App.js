import Clients from "./component/ourClientPage/clients/Clients";
import Stats from "./component/ourClientPage/stats/Stats";
import React from "react";
import HeroSection from "./component/heroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <Clients/>
      <HeroSection/>
    </div>
  );
}

export default App;
