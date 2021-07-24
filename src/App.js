import "./App.css";
import NavbarApp from "./Component/Navbar";
import Jumbotron from "./Component/Jumbotron";
import APIBar from "./Component/Apibar";
import AdvancedStatistics from "./Component/Advanced-statistic";
import BoostToday from "./Component/boost-today";
import React from "react";
import FooterPage from "./Component/footer";

function App() {
  return (
    <React.StrictMode>
      <NavbarApp />
      <Jumbotron />
      <APIBar />
      <AdvancedStatistics />
      <BoostToday />
      <FooterPage />
    </React.StrictMode>
  );
}

export default App;
