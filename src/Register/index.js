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
      <div className="container">
        <form className="row text-center offset-1" onSubmit={this.handleSubmit}>
          <div className="form-group col-4 row">
            <label className="col-4 pt-1" htmlFor="username">Username:</label>
            <input className="form-control col-8" type='text' id="username" name='username' onChange={this.handleChange}/>
          </div>
          <div className="form-group col-4 row">
            <label className="col-4 pt-1" htmlFor="password">Password:</label>
            <input className="form-control col-8" type='text' id="password" name='password' onChange={this.handleChange}/>
          </div>
          <div className="form-group col-2">
            <button className="btn btn-primary" type='submit'>Register</button>
          </div>
        </form>
      </div>
      )
  }
}

export default Register;
