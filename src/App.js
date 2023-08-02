import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePost from "./pages/manage-post";
import ManagePostAdd from "./pages/manage-post-add";
import ManagePostEdit from "./pages/manage-post-edit";
import Post from "./pages/post";
import ManageUsers from "./pages/manage-users";
import ManageUsersAdd from "./pages/manage-users-add";
import ManageUsersEdit from "./pages/manage-users-edit";

/*
  / --> home
  /dashboard --> Dashboard
  /manage-post --> ManagePost

  if the post id is 4 
  PHP:
  /post?id=4

  REACT:
  /post/4
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-post" element={<ManagePost />} />
        <Route path="/manage-post-add" element={<ManagePostAdd />} />
        <Route path="/manage-post-edit/:id" element={<ManagePostEdit />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-users-add" element={<ManageUsersAdd />} />
        <Route path="/manage-users-edit/:id" element={<ManageUsersEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
