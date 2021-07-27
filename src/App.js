import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/common/Navbar/Navbar";
import Footer from "./pages/common/Footer/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
