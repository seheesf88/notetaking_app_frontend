import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      "username" : '',
      "password" : ''
    }
  }

  handleLoginChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleLoginSubmit = async (e) =>{
    e.preventDefault()
		try{
				const response = await fetch(`http://localhost:8000/api/v1/users/login`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
					}
				});

				if(!response.ok){
					throw Error(response.statusText);
				}

				const parsedReponse = await response.json();
        localStorage.setItem('username', parsedReponse.username);
        window.location.reload();

		}catch(err){
			console.log("Error: ", err);
		}
	}

  render(){
    return (
      <div className="">
        <form className="" onSubmit={this.handleLoginSubmit}>
          <div className="form-group text-left">
            <label className="">Username:</label>
            <input className="form-control" type='text' name='username' onChange={this.handleLoginChange}/>
          </div>
          <div className="form-group text-left">
            <label className="">Password:</label>
            <input className="form-control" type='text' name='password' onChange={this.handleLoginChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type='submit'>Login</button>
          </div>
        </form>
      </div>
      )
  }
}

export default Login;
