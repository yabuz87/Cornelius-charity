import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthStore } from './store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const UserDashBoard = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();

  const {
    fullName = "Unknown User",
    email = "N/A",
    phone = "N/A",
    membership = "N/A",
    profile,
  } = authUser || {};

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row" style={{ marginTop: "80px" }}>
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <img
                src={profile || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt="User Icon"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="card-title">{fullName}</h5>
              <p className="card-text"><strong>Email:</strong> {email}</p>
              <p className="card-text"><strong>Phone:</strong> {phone}</p>
              <p className="card-text"><strong>Membership:</strong> {membership}</p>
              <button
                onClick={handleLogout}
                className="btn btn-danger mt-3 w-100"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-4">📊 Dashboard Overview</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Donations</h5>
                      <p className="card-text">$500 Raised</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Goals Progress</h5>
                      <p className="card-text">75% Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline-dark mt-3 w-100">
                View More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;