import React from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Navigation from "./components/Navigation/";
import Register from "./containers/Register";
import SearchDeals from "./components/SearchDeals";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import styles from "./App.module.scss";
import DealProvider from "./context/DealProvider";

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
      <Navigation />
        <Switch>
          <DealProvider>
            <Route path="/search" component={SearchDeals}/>
            <Route path="/register" component={Register}/>
            <Route path="/home" component={Home}/>
            <Route  exact path="/" component={Login}/>
          </DealProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
