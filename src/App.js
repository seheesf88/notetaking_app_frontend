import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import PostingContainer from './PostingContainer';



class App extends Component {
  constructor(){
    super();

    this.state = {
      allPosts : [],
      username : "",
  }

}

  componentDidMount(){
      this.getPostings()
  }

  //get all postings
  getPostings = async () => {

    try {
      const response = await fetch('http://localhost:8000/api/v1/postings', {
        credentials: 'include'
      });


      if(!response.ok){
        throw Error(response.statusText);
      }

      const responseParsed = await response.json();
      console.log('iii', responseParsed.postings)

      this.setState({
        allPosts: responseParsed.postings
      })

    } catch(err){
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

      const registerParsed = await registerResponse.json()

      // console.log('userinfo', registerParsed)

      this.setState({
        username : registerParsed.username,
      });


      localStorage.setItem('username', registerParsed.username);


      // this.getPostings(registerParsed)
      }catch(err){
        console.log(err)
      }

    }

  handlePosting = async (data) => {
    console.log('handleposting data', data);
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


  render() {
    console.log('here', this.state.allPosts)
    return (
      <div className="App">
        <div className="">Note Taking App</div>
        <Register handleRegister={this.handleRegister} />
        <PostingContainer handlePosting={this.handlePosting} username={this.state.username}/>

      </div>
    );
  }
}

export default App;
