import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

const AppRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={Auth} />
  </Switch>
);

export default AppRoute;
