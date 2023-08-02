import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ManageUsersEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));

    const user = users
      ? users.find((u) => parseInt(u.id) === parseInt(id))
      : null;

    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, []);

  const updateUser = () => {
    const users = JSON.parse(localStorage.getItem("users"));

    const newUsers = users.map((u) => {
      if (parseInt(u.id) === parseInt(id)) {
        u.name = name;
        u.email = email;
        u.role = role;
      }

      return u;
    });

    localStorage.setItem("users", JSON.stringify(newUsers));

    navigate("/manage-users");
  };

  return (
    <div className="container mx-auto my-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Edit User</h1>
      </div>
      <div className="card mb-2 p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updateUser();
          }}
        >
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="col">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="role" className="form-label">
              Role
            </label>
            <select
              className="form-control"
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="">Select an option</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/manage-users" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Users
        </Link>
      </div>
    </div>
  );
}
