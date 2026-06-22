import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiRefreshCw, FiAlertCircle } from "react-icons/fi";
import "../../styles/DashboardPages.css";

const avatarColors = ["#3C50E0", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("http://localhost:3000/api/v1/auth/users");
      if (!response.ok) {
        throw new Error(`Ikibazo: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      // API isubiza { data: [...] } cyangwa array neza
      const usersData = Array.isArray(result) ? result : result.data || [];
      setUsers(usersData);
    } catch (err) {
      setError(err.message || "Ntibyashobotse gufetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter(u =>
    (u.firstName + " " + u.lastName).toLowerCase().includes(search.toLowerCase()) ||
    (u.email || "").toLowerCase().includes(search.toLowerCase()) ||
    (u.userRole || "").toLowerCase().includes(search.toLowerCase())
  );

  const getStatusClass = (status) => {
    if (status === "Active" || status === "active") return "status-badge active";
    if (status === "Inactive" || status === "inactive") return "status-badge out";
    return "status-badge low";
  };

  const getRoleClass = (role) => {
    if (role === "admin" || role === "Admin") return "role-badge admin";
    if (role === "editor" || role === "Editor") return "role-badge editor";
    return "role-badge viewer";
  };

  const activeCount = users.filter(u => u.status === "Active" || u.status === "active").length;
  const adminCount = users.filter(u => u.userRole === "admin" || u.userRole === "Admin").length;

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Users</h1>
          <p className="dash-page-sub">Manage platform users and permissions</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="dash-btn-secondary"
            onClick={fetchUsers}
            title="Refresh"
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "transparent", border: "1px solid #3C50E0",
              color: "#3C50E0", padding: "8px 16px", borderRadius: "8px",
              cursor: "pointer", fontWeight: 600
            }}
          >
            <FiRefreshCw size={14} /> Refresh
          </button>
          <button className="dash-btn-primary">
            <FiPlus /> Add User
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="users-stats-row">
        <div className="users-stat-card">
          <span className="users-stat-num">{users.length}</span>
          <span className="users-stat-label">Total Users</span>
        </div>
        <div className="users-stat-card">
          <span className="users-stat-num">{activeCount}</span>
          <span className="users-stat-label">Active</span>
        </div>
        <div className="users-stat-card">
          <span className="users-stat-num">{adminCount}</span>
          <span className="users-stat-label">Admins</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="dash-search-bar">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          padding: "60px", flexDirection: "column", gap: "16px"
        }}>
          <div className="api-spinner"></div>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>Gutegura users...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          background: "#fef2f2", border: "1px solid #fecaca",
          borderRadius: "12px", padding: "16px 20px", color: "#dc2626",
          marginBottom: "20px"
        }}>
          <FiAlertCircle size={20} />
          <div>
            <p style={{ fontWeight: 600, margin: 0 }}>Habonetse ikibazo!</p>
            <p style={{ fontSize: "13px", margin: "4px 0 0 0", opacity: 0.8 }}>{error}</p>
          </div>
          <button
            onClick={fetchUsers}
            style={{
              marginLeft: "auto", background: "#dc2626", color: "white",
              border: "none", borderRadius: "8px", padding: "8px 16px",
              cursor: "pointer", fontSize: "13px", fontWeight: 600
            }}
          >
            Gerageza nanone
          </button>
        </div>
      )}

      {/* Users Table */}
      {!loading && !error && (
        <div className="dash-table-card">
          {filtered.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "60px", color: "#9ca3af"
            }}>
              <p style={{ fontSize: "16px", fontWeight: 500 }}>
                {users.length === 0 ? "Nta users babonetse muri database" : "Nta results ziboneye"}
              </p>
            </div>
          ) : (
            <table className="dash-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user, idx) => {
                  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim() || "Unknown";
                  return (
                    <tr key={user._id || idx}>
                      <td>
                        <div className="product-name-cell">
                          <div
                            className="user-avatar"
                            style={{ background: avatarColors[idx % avatarColors.length] }}
                          >
                            {fullName.charAt(0).toUpperCase()}
                          </div>
                          {fullName}
                        </div>
                      </td>
                      <td className="email-cell">{user.email}</td>
                      <td><span className={getRoleClass(user.userRole)}>{user.userRole || "user"}</span></td>
                      <td><span className={getStatusClass(user.status || "Active")}>{user.status || "Active"}</span></td>
                      <td>
                        <div className="action-btns">
                          <button className="icon-btn edit"><FiEdit2 /></button>
                          <button className="icon-btn delete"><FiTrash2 /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Users;
