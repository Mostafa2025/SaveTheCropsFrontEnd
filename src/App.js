import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dash from "./components/Dashboard";
import Forms from "./components/Forms";
import Signup from "./components/Signup";
import Listings from "./components/Listings"
import FoodBanks from "./components/FoodBanks"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/signin">
            <Signup />
          </Route>
          <Route exact path="/forms">
            <Forms />
          </Route>
          <Route exact path="/listing">
            <Listings />
          </Route>
          <Route exact path="/foodBanks">
            <FoodBanks />
          </Route>
          <Route exact path="/dashboard">
            <Dash></Dash>
          </Route>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
