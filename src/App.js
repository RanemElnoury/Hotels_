import Navbar from "./shared/navbar/Navbar.jsx";
import Footer from "./shared/footer/Footer.jsx";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/variables.css";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <RoutesConfig />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
