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
        }catch(err) {
            return err;
        }
  }

  render(){
    return (
      <div className="">
        <form className="" onSubmit={this.handleEditSubmit}>
          <div className="form-group text-left">
            <label className="">Title:</label>
            <input className="form-control" type='text' name='title' onChange={this.handleEditChange}/>
          </div>
          <div className="form-group text-left">
            <label className="">Content:</label>
            <textarea className="form-control" type='text' name='content' onChange={this.handleEditChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type='submit'>Update</button>
          </div>
        </form>
      </div>
      )
  }
}

export default EditContainer;
