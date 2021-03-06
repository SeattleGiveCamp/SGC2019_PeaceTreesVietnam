import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Switch,  Redirect } from "react-router-dom";
import "../styles/App.css";
import MapPage from "./MapPage/MapPage";
import LoginForm from "../components/LoginForm/LoginForm.js";
import SignupForm from "../components/LoginForm/SignupForm.js";
import Form from "./Form/Form";
import ErrorPage from "./ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TablePage from "./TablePage/TablePage";
import AdminPage from "./AdminPage/AdminPage";
import HowToPage from "./HowToPage/HowToPage";

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props._logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return <nav className="navbar"></nav>;
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }

  componentDidMount() {
    // axios.get("/auth/user").then(response => {
    //   console.log(response.data);
    //   if (!!response.data.user) {
    //     console.log("THERE IS A USER");
    //     this.setState({
    //       loggedIn: true,
    //       user: response.data.user
    //     });
    //   } else {
    //     this.setState({
    //       loggedIn: false,
    //       user: null
    //     });
    //   }
    // });
  }

  _logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios.post("/auth/logout").then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _login(username, password) {
    axios
      .post("/auth/login", {
        username,
        password
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
        {/* <BrowserRouter> */}
        <Switch>

        <Route exact path='/' component={MapPage}></Route>
        {/* <Route exact path='/login' component={LoginForm}></Route> */}
        <Route exact path='/form' component={Form}></Route>
        <Route exact path='/table' component={TablePage}></Route>
        <Route
          exact
          path='/admin'
          render={() => <AdminPage user={this.state.user} />}
          component={AdminPage}
        ></Route>
        <Route
          exact
          path='/login'
          render={() => <LoginForm _login={this._login} />}
        />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/manual' component={HowToPage}></Route>
        <Route exact path='/logout' render={() => <Redirect to="/"/>}/>
        <Route component={ErrorPage}></Route>
        </Switch>
        {/* </BrowserRouter> */}
        <Footer />
      </div>
    );
  }
}
