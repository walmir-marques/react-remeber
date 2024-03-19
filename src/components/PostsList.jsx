import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isPosting, hideModalHandler }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        {posts.map((post) => {
          return <Post author={post.author} body={post.body} />;
        })}
      </ul>
    </>
  );
}

export default PostsList;
