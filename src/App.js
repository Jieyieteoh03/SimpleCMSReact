import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import ManagePost from "./pages/manage-post";
import ManagePostAdd from "./pages/manage-post-add";
import ManagePostEdit from "./pages/manage-post-edit";
import Post from "./pages/post";

/*
  / --> home
  /dashboard --> Dashboard
  /manage-post --> ManagePost
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-post" element={<ManagePost />} />
        <Route path="/manage-post-add" element={<ManagePostAdd />} />
        <Route path="/manage-post-edit" element={<ManagePostEdit />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
