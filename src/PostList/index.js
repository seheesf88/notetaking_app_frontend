import React from 'react';

const PostList = (props) =>{
    console.log(props.allPosts)

    const posts = props.allPosts.slice().reverse().map((item) => {
        let currentUser = localStorage.getItem('username')

        return (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <span>{item.content}</span>
                  <span>{item.username}</span>
                  {currentUser === item.username?
                    <div>
                    <button onClick={props.deletePost.bind(null, item.id)}>Delete</button>
                    </div> :
                    <span>
                      <button>Login to edit/delete</button>
                    </span>

                  }
                </li>
            )

    });
    return(
        <div>
          <ol>
            {posts}
          </ol>
        </div>
    );
}

export default PostList;
