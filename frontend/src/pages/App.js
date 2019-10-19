import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";
import MapPage from "./MapPage/MapPage";
import Login from "./Login/Login";
import Form from "./Form/Form";
import ErrorPage from "./ErrorPage/ErrorPage";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import OrdnancePage from "./OrdnancePage/OrdnancePage";
import AdminPage from "./AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
    <Header />
      <BrowserRouter>      
        <Route path="/" component={MapPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/error" component={ErrorPage}></Route>
        <Route path="/ordnance" component={OrdnancePage}></Route>
        <Route path="/admin" component={AdminPage}></Route>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
