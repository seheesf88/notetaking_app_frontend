import React, { Component } from 'react';
import EditContainer from '../EditContainer'
import Login from '../Login'
import { Accordion, Button } from 'react-bootstrap';

class PostList extends Component {
  constructor(){
    super();
  }
    render(){
      const posts = this.props.allPosts.slice().reverse().map((item) => {
        let currentUser = localStorage.getItem('username')
        return (
              <tr key={item.id} className="text-center">
                <th scope="col">{item.title}</th>
                  { currentUser === item.username ?
                    <td>{item.content}</td> :
                    <td><div className="badge badge-danger">Login please!</div></td>
                  }
                    <td>{item.username}</td>
                  { currentUser === item.username ?
                    <td><button className="btn btn-primary" onClick={this.props.deletePost.bind(null, item.id)}>Delete</button></td> :
                    <td><div className="badge badge-danger">Login please!</div></td>
                  }
                  { currentUser === item.username ?
                    <td className="py-0">
                      <Accordion>
                          <div>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                              <button className="btn btn-primary mt-1">Edit</button>
                            </Accordion.Toggle>
                          </div>
                          <Accordion.Collapse eventKey="1">
                            <div><EditContainer item={item}/></div>
                          </Accordion.Collapse>
                      </Accordion>
                    </td> :
                  <td><div className="badge badge-danger">Login please!</div></td>
                 }
              </tr>
            )
      });

    return (
        <>
          <table className="table">
            <thead>
              <tr className="text-center">
                <th className="w-25" scope="col">Title</th>
                <th className="w-50" scope="col">Content</th>
                <th className="" scope="col">Author</th>
                <th className="" scope="col">Remove</th>
                <th className="w-75" scope="col">Edit</th>
              </tr>
            </thead>
          <tbody>
            {posts}
          </tbody>
          </table>
        </>
    );
  }
}

export default PostList;
