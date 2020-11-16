import React, { Component } from 'react';

class PostingContainer extends Component {
  constructor(){
    super();

    this.state = {
      "title" : '',
      "content" : '',
      "username" : '',

    }
  }


  handlePostChange = (e) => {
    this.setState({
      username : this.props.username,
      [e.target.name]: e.target.value
    })
  }
  handlePostSubmit = (e) => {
    e.preventDefault()
    this.props.handlePosting(this.state)

  }



  render(){
    return (
      <form onSubmit={this.handlePostSubmit}>
        <label>
          Title:
          <input type='text' name='title' onChange={this.handlePostChange} value={this.state.title}/>
        </label>

        <label>
          Content:
          <input type='text' name='content' onChange={this.handlePostChange} value={this.state.content}/>
        </label>
        <button type='submit'>Post</button>
      </form>
      )
  }
}

export default PostingContainer;
