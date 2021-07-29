import "./App.css";
import HomePage from "./components/layout/HomePage/homePage";
import Audio from "./components/Audio/Audio";
import { Switch, Route, Redirect } from "react-router-dom";
import FootballFantasy from "./components/FootballFantasy/FootballFantasy";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import FastfoodMenu from "./components/FastfoodMenu/FastfoodMenu";

function App() {
  return (
    <>
      <Audio />
      <Switch>
        <Route path="/footballfantasy" component={FootballFantasy} />
        <Route path="/about" component={About} />
        <Route path="/fastfoodmenu" component={FastfoodMenu} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
