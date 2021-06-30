import React from "react"
import {Switch,Route,Link} from "react-router-dom";
import Tour from "./pages/Tour";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import FooterPage from "./pages/Footerpage";

function App() {
  return (
    <div>
      <Menu></Menu>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
         
          <Route path="/Tour">
            <Tour />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
}

export default App;
