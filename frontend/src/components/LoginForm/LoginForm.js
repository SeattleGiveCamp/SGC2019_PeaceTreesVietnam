import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import "./LoginForm.scss";
import { FormControl, InputLabel, Button, Input } from '@material-ui/core'

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = { username: '',
     password: '',
     redirectTo: null
  };
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
  }
  handleSubmit(event) {
	event.preventDefault()
	console.log('handleSubmit')
	this.props._login(this.state.username, this.state.password)
	this.setState({
		redirectTo: '/admin'
	})
}

render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
		return (
			<div className="LoginForm">
				<h1>Admin Login Form</h1>
				<FormControl>
					{/* <label htmlFor="username">Username: </label> */}
					<InputLabel htmlFor="username">Username</InputLabel>
					<Input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					{/* <InputLabel htmlFor="password">Password</InputLabel> */}
					<Input id="password" aria-describedby="password" />
					<Input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					
					<Button color = 'primary' onClick={this.handleSubmit}>Login</Button>
					</FormControl>

			</div>
		)
	}
}
}

// export default LoginForm