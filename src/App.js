import "./App.css";
import NavbarApp from "./Component/Navbar";
import Jumbotron from "./Component/Jumbotron";
import APIBar from "./Component/Apibar";
import AdvancedStatistics from "./Component/Advanced-statistic";
import BoostToday from "./Component/boost-today";
import FooterPage from "./Component/footer";

function App() {
  return (
    <div>
      <NavbarApp />
      <Jumbotron />
      <APIBar />
      <AdvancedStatistics />
      <BoostToday />
      <FooterPage />
    </div>
  );
}

export default App;
