import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import PostingContainer from './PostingContainer';
import PostList from './PostList';


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
      })

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

        console.log(this.getPostings());

        }catch(err){
          console.log(err)
        }

      }


    deletePost = async (id) => {
      try {

          const response = await fetch(`http://localhost:8000/api/v1/postings/` + id, {
              method: 'DELETE'
          });
          if (!response.ok) {
              throw Error(response.statusText);
          }

          this.setState({
              allPosts: this.state.allPosts.filter( post => post.id !== id)
          });
      } catch (err) {
          return err;
      }
  }

  render() {
    // console.log('state', this.state.allPosts);
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
                <PostingContainer handlePosting={this.handlePosting} username={this.state.username}/>
              </div>
                 :
              <div className="row">
                <div className="offset-4 font-weight-bold">Please register before post!</div>
              </div>
            }
        <div className="row">
          <PostList allPosts={this.state.allPosts} deletePost={this.deletePost} editPost={this.editPost}/>
        </div>
      </div>
    );
  }
}

export default App;
