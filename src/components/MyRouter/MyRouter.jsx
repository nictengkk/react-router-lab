import React from "react";
import NavLinks from "../NavLinks/NavLink";
import HomePage from "../HomePage/HomePage";
import TwitterFeed from "../TwitterFeed/TwitterFeed";
import TacosFeed from "../TacosFeed/TacosFeed";
import specialTacoPage from "../SpecialTacoPage/specialTacoPage";
import TacoDetail from "../TacoDetail/TacoDetail";
import error from "../Error/error";
import unauthorised from "../Unauthorised/unauthorised";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function MyRouter() {
  const data = "Hello World";
  return (
    <BrowserRouter>
      <div>
        <NavLinks />
        <Switch>
          <Route path="/specialTacoPage" component={specialTacoPage} />
          <Route
            path="/tacos/42"
            render={() => <Redirect to="/specialTacoPage" />}
          />

          <Route
            path="/twitter"
            render={props => <TwitterFeed data={data} {...props} />}
          />

          <Route
            path="/tacos/:id"
            render={props => <TacoDetail {...props} />}
          />
          <Route path="/tacos" render={props => <TacosFeed {...props} />} />
          <Route path="/unauthorised" component={unauthorised} exact />
          <Route path="/" component={HomePage} exact />
          <Route component={error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default MyRouter;
