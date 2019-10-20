import React from "react";

import "./LoginForm.scss"

export default class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", loading: false };
    this.loginUser = this.loginUser.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  loginUser = (e) => {
    alert("Logged in with username " + this.state.username);
  };

  render() {
    var inputStyles = {padding: "1em"};

    return (<div>
      <form>
        <div>
          <label for="login-username">
            <input type="text" style={inputStyles} value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>

        <div>
          <label for="login-password">
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>

        <div>
          <a href="#">Forgot password?</a>
        </div>

        <div>
          <button type="submit" onClick={this.loginUser}>Login</button>
        </div>
      </form>
    </div>);
  }
}
