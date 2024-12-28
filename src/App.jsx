import { HashRouter as Router } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar.jsx";
import Footer from "./shared/footer/Footer.jsx";
import RoutesConfig from "./routes/RoutesConfig.jsx";

function App() {
  return (
    <Router basename="/Hotels_">
      <Navbar />
      <RoutesConfig />
      <Footer />
    </Router>
  );
}

export default App;
