import { Link, useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  // 1. load all the posts from local storage
  const posts = JSON.parse(localStorage.getItem("posts"));

  // 2. find the post with the provided id
  // method 1
  let post = null;
  if (posts) {
    // use .find to find the post with the provided id
    post = posts.find((p) => parseInt(p.id) === parseInt(id));
  }

  // method 2
  // const post = posts
  //   ? posts.find((p) => parseInt(p.id) === parseInt(id))
  //   : null;
  return (
    <div className="container mx-auto my-5">
      <h1 className="h1 mb-4 text-center">{post ? post.title : null}</h1>
      <p>Post ID: {id}</p>
      <p>{post ? post.content : null}</p>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}
