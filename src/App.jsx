import React from "react";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Navigation from "./components/Navigation/";
import Register from "./containers/Register";
import SearchDeals from "./components/SearchDeals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import DealProvider from "./context/DealProvider";

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
      <Navigation />
        <Switch>
          <DealProvider>
            <Route path="/" component={Home}/>
            <Route path="/search" component={SearchDeals}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </DealProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
