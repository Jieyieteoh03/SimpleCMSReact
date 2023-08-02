import { Link } from "react-router-dom";

export default function Home() {
  // // save item into local storage
  // localStorage.setItem("title", "My Blog");

  // // get item from local storage
  // localStorage.getItem("title");
  // // const desc = localStorage.getItem("desc"); call item

  // get posts from local storage
  const posts = JSON.parse(localStorage.getItem("posts"));
  return (
    <div className="container mx-auto my-5">
      <h1 className="h1 mb-4 text-center">My Blog</h1>
      {posts
        ? posts.map((post) => {
            return (
              <div key={post.id} className="card mb-2">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <div className="text-end">
                    <Link
                      to={`/post/${post.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        : null}

      {/* <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">Post 3</h5>
          <p className="card-text">This is for post 3</p>
          <div className="text-end">
            <Link to="/post" className="btn btn-primary btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">Post 2</h5>
          <p className="card-text">This is about post 2</p>
          <div className="text-end">
            <Link to="/post" className="btn btn-primary btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">Post 1</h5>
          <p className="card-text">This is a post</p>
          <div className="text-end">
            <Link to="/post" className="btn btn-primary btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div> */}

      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/dashboard" className="btn btn-link btn-sm">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

// <div>
//   <h1>Home</h1>
//   {/* React method */}
//   <Link to="/dashboard" className="me-2">
//     Dashboard
//   </Link>
//   <Link to="/manage-post" className="me-2">
//     Manage Post
//   </Link>

//   {/* Old method */}
//   {/* <a href="/manage-post" className="me-2">
//       Manage Post
//     </a> */}
// </div>
