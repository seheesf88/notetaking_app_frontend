import React, { Component } from 'react';
import EditContainer from '../EditContainer'
import { Collapse, Button } from 'react-bootstrap';

class PostList extends Component {
  constructor(){
    super();
    this.state = {
      open: false
    }
  }
    render(){
      const { open } = this.state;
      const posts = this.props.allPosts.slice().reverse().map((item) => {
          let currentUser = localStorage.getItem('username')

          return (
                  <tr key={item.id} className="text-center">
                    <th scope="col">{item.title}</th>
                    <td>{item.content}</td>
                    <td>{item.username}</td>

                  { currentUser === item.username ?
                    <td>
                      <button className="btn btn-primary" onClick={this.props.deletePost.bind(null, item.id)}>Delete</button>
                    </td>
                    :
                    <td>
                      <button>Login</button>
                    </td>
                  }
                  {currentUser === item.username?
                    <td>
                    <Button
                      variant="primary"
                      size="m"
                      onClick={() => this.setState({open: !open })}
                      aria-controls="example-collapse-text"
                      aria-expanded={this.state.open}
                      >
                      Edit
                      </Button>
                      <Collapse in={this.state.open}>
                        <div className="border" id="example-collapse-text">
                          <EditContainer item={item}/>
                        </div>
                      </Collapse>
                    </td>
                  :
                    <td><button>Login</button></td>
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
                <th className="w-50" scope="col">Edit</th>
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




// import React from 'react';
// import EditContainer from '../EditContainer'
// import { Collapse, Button } from 'react-bootstrap';
//
// const PostList = (props) =>{
//     console.log(props.allPosts)
//
//     const posts = props.allPosts.slice().reverse().map((item) => {
//         let currentUser = localStorage.getItem('username')
//
//         return (
//                 <tr key={item.id}>
//                   <th scope="col">{item.title}</th>
//                   <td>{item.content}</td>
//                   <td>{item.username}</td>
//                 {currentUser === item.username?
//                   <td>
//                     <EditContainer item={item}/>
//                   </td>
//                 :
//                   <td><button>Login</button></td>
//                 }
//
//                 { currentUser === item.username ?
//                   <td><button onClick={props.deletePost.bind(null, item.id)}>Delete</button></td>
//                   :
//                   <td>
//                     <button>Login</button>
//                   </td>
//                 }
//                 </tr>
//             )
//
//     });
//     return(
//         <>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th className="w-25" scope="col">Title</th>
//                 <th className="w-50" scope="col">Content</th>
//                 <th className="w-25" scope="col">Author</th>
//                 <th className="w-25" scope="col">Edit</th>
//                 <th className="w-25" scope="col">Remove</th>
//               </tr>
//             </thead>
//           <tbody>
//             {posts}
//           </tbody>
//               </table>
//         </>
//     );
// }
//
// export default PostList;
