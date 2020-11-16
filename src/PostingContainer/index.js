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
    // e.preventDefault()
    this.props.handlePosting(this.state)
  }

  render(){
    return (
      <div className="container ml-4">
        <form className="row" onSubmit={this.handlePostSubmit}>
          <div className="col-8 pl-5">
            <div className="form-group row">
              <label className="col-2 mr-3 text-right">Title:</label>
              <input className="form-control col-9" type='text' name='title' onChange={this.handlePostChange} value={this.state.title}/>
            </div>
            <div className="form-group row">
              <label className="col-2 mr-3 text-right">Content:</label>
              <textarea className="form-control col-9" type='text' name='content' onChange={this.handlePostChange} value={this.state.content}/>
            </div>
          </div>
          <div className="col-1">
            <div className="form-group row">
              <button className="form-control btn btn-primary" type='submit'>Post</button>
            </div>
          </div>
        </form>
      </div>
      )
  }
}

export default PostingContainer;
