import React from 'react';
import EditContainer from '../EditContainer'

const PostList = (props) =>{
    console.log(props.allPosts)

    const posts = props.allPosts.slice().reverse().map((item) => {
        let currentUser = localStorage.getItem('username')

        return (
                <tr key={item.id}>
                  <th scope="col">{item.title}</th>
                  <td>{item.content}</td>
                  <td>{item.username}</td>
                {currentUser === item.username?
                  <td><EditContainer item={item}/></td>
                :
                  <td><button>Login</button></td>
                }

                { currentUser === item.username ?
                  <td><button onClick={props.deletePost.bind(null, item.id)}>Delete</button></td>
                  :
                  <td>
                    <button>Login</button>
                  </td>
                }
                </tr>
            )

    });
    return(
        <>
          <table className="table">
            <thead>
              <tr>
                <th className="w-25" scope="col">Title</th>
                <th className="w-50" scope="col">Content</th>
                <th className="w-25" scope="col">Author</th>
                <th className="w-25" scope="col">Edit</th>
                <th className="w-25" scope="col">Remove</th>
              </tr>
            </thead>
          <tbody>
            {posts}
          </tbody>
              </table>
        </>
    );
}

export default PostList;
