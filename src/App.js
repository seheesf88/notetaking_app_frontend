import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import PostingContainer from './PostingContainer';
import PostList from './PostList';
import Login from './Login'
import { Accordion, Button } from 'react-bootstrap';


class App extends Component {
  constructor(){
    super();
    this.state = {
      username : "",
      allPosts : [],
  }
}

  componentDidMount(){
    this.getPostings()
  }

  getPostings = async () => {
    try{
      const response = await fetch('http://localhost:8000/api/v1/postings', {
        credentials: 'include'
      });

      if(!response.ok){
        throw Error(response.statusText);
      }

      const responseParsed = await response.json();

      this.setState({
        allPosts: responseParsed.postings
      })

    }catch(err){
      console.log(err)
    }
  }


  handleRegister = async (data) => {
    try {
      const registerResponse = await fetch('http://localhost:8000/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(!registerResponse.ok){
        throw Error(registerResponse.statusText);
      }

      const registerParsed = await registerResponse.json()

      this.setState({
        username : registerParsed.username,
      })

      localStorage.setItem('username', registerParsed.username);

      }catch(err){
        alert('This username is already in use')
        console.log(err)
      }
    }



    handlePosting = async (data) => {
      try {
        const registerResponse = await fetch('http://localhost:8000/api/v1/postings', {
          method: 'POST',
          body: JSON.stringify(data),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const registerParsed = await registerResponse.json()

        }catch(err){
          console.log(err)
        }
      }


    deletePost = async (id) => {
      try{
          const response = await fetch(`http://localhost:8000/api/v1/postings/` + id, {
              method: 'DELETE'
          });

          if (!response.ok) {
              throw Error(response.statusText);
          }

          this.setState({
              allPosts: this.state.allPosts.filter( post => post.id !== id)
          });
      }catch(err){
          return err;
      }
    }


  logout = async () => {
    try{
         const response = await fetch(`http://localhost:8000/api/v1/users/login`, {
            method: 'DELETE',
            credentials: 'include'
        });

         if (!response.ok) {
            throw Error(response.statusText);
          }

          const responseParsed = await response.json();
          console.log("logout parsed response: ", responseParsed);


         if(responseParsed === 'logout successful'){
            localStorage.removeItem('username')
          }
          window.location.reload();

     }catch(err){
      console.log(err);
    }
  }


  render() {
    return (
      <div className="App container px-3 py-3">
        <div className="row mb-5">
          <div className="col-4 offset-4 h1">Note taking app</div>
        </div>
        <div className="row">
          <Register handleRegister={this.handleRegister}/>
        </div>
          {this.state.username ?
            <div className="row">
              <div className="col-12"><PostingContainer handlePosting={this.handlePosting} username={this.state.username}/></div>
            </div>
               :
            <div className="row my-2">
              <div className="col-4 offset-4 font-weight-bold">Please register before post!</div>
            </div>
          }
        <div className="row mt-3 mb-5">
          <div className="col-5 offset-4">
            <Accordion>
              <div>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <button className="btn btn-outline-primary mr-1">Find my note(Login)</button>
                  <button className="btn btn-primary" onClick={this.logout}>logout</button>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="1">
                <div><Login /></div>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
        <div className="row">
          <PostList allPosts={this.state.allPosts} deletePost={this.deletePost} editPost={this.editPost} />
        </div>
      </div>
    );
  }
}

export default App;
