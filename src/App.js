import "./App.css";
import HomePage from "./components/layout/homePage";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import FootballFantasy from "./components/FootballFantasy/FootballFantasy";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FastfoodMenu from "./components/FastfoodMenu/FastfoodMenu";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/footballfantasy" component={FootballFantasy} />
        <Route path="/about" component={About} />
        <Route path="/fastfoodmenu" component={FastfoodMenu} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
