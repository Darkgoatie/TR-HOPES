const { render } = require("react-dom"); // Import renderer from react library
import "./global.css"; // Import global css ( Applies for all components )
import "./footer.css";

// Import Components Route
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Routes/Home/Navbar/Navbar";
import About from "./Routes/Home/About/About";
import Vision from "./Routes/Home/Vision/Vision";
import Members from "./Routes/Home/Members/Members";



render(
  <Router>
    <Routes>
      <Route exact path="/">
        <div className="sections">
          <About />
          <Navbar/>
          <Vision/>
          <Members/>
        </div>
      </Route>
      <Route exact path="/sponsors">
      </Route>
      <Route>
        <meta http-equiv="refresh" content="0;URL='/'" />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
