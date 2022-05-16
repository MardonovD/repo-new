import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//WEBdasturlash yo'nalishi
//HTML/CSS
//JavaScript
//PHP / Python / Java / Ruby / Go
//Mobile Development
//Java va Kotlin (Android uchun) 
//Swift (iOS uchun),
//Python / JavaScript / C#
//Game Development
//Data Science
//SMM - Social Media Marketing