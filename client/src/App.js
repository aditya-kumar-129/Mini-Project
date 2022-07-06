import "./App.css";
import Header from "./MyComponents/header";
import SignUp from "./MyComponents/signup";
import SignIn from "./MyComponents/signin";
import ocr from "./MyComponents/ocr";
import Home from "./MyComponents/home";
import About from "./MyComponents/about";
import Footer from "./MyComponents/footer";
// import Logout from "./MyComponents/logout";
import Profile from "./MyComponents/profile";
// import Chat from './MyComponents/chat';
import KommunicateChat from "./MyComponents/chat";
import Diet from "./MyComponents/Feed/diet";
import GoodHabits from "./MyComponents/Feed/goodHabits";
import HarmfulEffects from "./MyComponents/Feed/harmfulEffects";
import Hygiene from "./MyComponents/Feed/hygiene";
import Motivation from "./MyComponents/Feed/motivation";
import Sleep from "./MyComponents/Feed/sleep";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/ocr" exact component={ocr} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/chat" exact component={KommunicateChat} />
        {/* <Route path="/logout" exact component={Logout} /> */}
        <Route path="/profile" exact component={Profile} />
        <Route path="/signout" exact component={SignIn} />
        <Route path="/diet" exact component={Diet} />
        <Route path="/sleep" exact component={Sleep} />
        <Route path="/goodHabits" exact component={GoodHabits} />
        <Route path="/hygiene" exact component={Hygiene} />
        <Route path="/motivation" exact component={Motivation} />
        <Route path="/harmfulEffects" exact component={HarmfulEffects} />
      </Switch>
      <div>
        <KommunicateChat />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
