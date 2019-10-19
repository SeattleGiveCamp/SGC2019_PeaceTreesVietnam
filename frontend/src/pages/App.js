import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";
import MapPage from "./MapPage/MapPage";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={MapPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/error" component={ErrorPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
