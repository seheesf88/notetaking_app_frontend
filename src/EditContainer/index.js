import React, { Component } from 'react';

class EditContainer extends Component {
  constructor(){
    super();

    this.state = {
      "title" : '',
      "content" : '',
      "username" : '',
    }
  }

  handleEditChange = (e) => {
    this.setState({
      username : this.props.item.username,
      [e.target.name]: e.target.value
    })
  }

  handleEditSubmit = async (e) => {
    let postId = this.props.item.id
      try {
          const response = await fetch(`http://localhost:8000/api/v1/postings/` + postId, {
              method: 'PUT',
              body: JSON.stringify(this.state),
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          if(!response.ok) {
              return Error(response.statusText);
          }
          const editParsed = await response.json();


          this.setState({
              "title" : '',
              "content" : '',
          });
          } catch (err) {
              return err;
      }
  }

  render(){
    return (
      <form onSubmit={this.handleEditSubmit}>
        <label>
          Title:
          <input type='text' name='title' onChange={this.handleEditChange}/>
        </label>

        <label>
          Content:
          <input type='text' name='content' onChange={this.handleEditChange}/>
        </label>
        <button type='submit'>Edit</button>
      </form>
      )
  }
}

export default EditContainer;
