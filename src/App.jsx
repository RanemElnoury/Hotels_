import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar.jsx";
import Footer from "./shared/footer/Footer.jsx";
import RoutesConfig from "./routes/RoutesConfig.jsx";
import "./styles/variables.css";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
