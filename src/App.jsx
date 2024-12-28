import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar.jsx";
import Footer from "./shared/footer/Footer.jsx";
import RoutesConfig from "./routes/RoutesConfig.jsx";
import "./styles/variables.css";
import "./styles/index.css";

function App() {
  const basename = process.env.NODE_ENV === "production" ? "/Hotels_" : "";
  return (
    <div className="App">
      
      <Router basename={basename}>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
