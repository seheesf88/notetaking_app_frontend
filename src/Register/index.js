import React, { Component } from 'react';

class Register extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleRegister(this.state)
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange}/>
        </label>
        <label>
          password:
          <input type='text' name='password' onChange={this.handleChange}/>
        </label>
        <button type='submit'>Register</button>
      </form>

      )
  }
}

export default Register;
