import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";
import MapPage from "./MapPage/MapPage";
import Login from "./Login/Login";
import Form from "./Form/Form";
import ErrorPage from "./ErrorPage/ErrorPage";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" component={MapPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/error" component={ErrorPage}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
