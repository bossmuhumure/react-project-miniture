import React, { useState } from "react";
import { FiUser, FiBell, FiLock, FiGlobe, FiSave } from "react-icons/fi";
import "../../styles/DashboardPages.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 555 000 1234",
    bio: "Admin user managing TailAdmin dashboard.",
  });
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: false,
    weeklyReport: true,
    productUpdates: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs = [
    { key: "profile", label: "Profile", icon: <FiUser /> },
    { key: "notifications", label: "Notifications", icon: <FiBell /> },
    { key: "security", label: "Security", icon: <FiLock /> },
    { key: "language", label: "Language", icon: <FiGlobe /> },
  ];

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Settings</h1>
          <p className="dash-page-sub">Manage your account preferences</p>
        </div>
      </div>

      <div className="settings-layout">
        {/* Tabs Sidebar */}
        <div className="settings-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`settings-tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="settings-panel">

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="settings-section">
              <h2 className="settings-section-title">Profile Information</h2>
              <div className="settings-avatar-row">
                <div className="settings-avatar">A</div>
                <button className="dash-btn-outline">Change Photo</button>
              </div>
              <div className="settings-form-grid">
                {[
                  { label: "Full Name", key: "name", type: "text" },
                  { label: "Email Address", key: "email", type: "email" },
                  { label: "Phone Number", key: "phone", type: "tel" },
                ].map(field => (
                  <div className="settings-field" key={field.key}>
                    <label>{field.label}</label>
                    <input
                      type={field.type}
                      value={profile[field.key]}
                      onChange={e => setProfile({ ...profile, [field.key]: e.target.value })}
                    />
                  </div>
                ))}
                <div className="settings-field full-width">
                  <label>Bio</label>
                  <textarea
                    rows={3}
                    value={profile.bio}
                    onChange={e => setProfile({ ...profile, bio: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="settings-section">
              <h2 className="settings-section-title">Notification Preferences</h2>
              <div className="toggle-list">
                {Object.entries(notifications).map(([key, value]) => (
                  <div className="toggle-row" key={key}>
                    <div>
                      <p className="toggle-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</p>
                      <p className="toggle-sub">Receive alerts via this channel</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => setNotifications(n => ({ ...n, [key]: !n[key] }))}
                      />
                      <span className="toggle-slider" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="settings-section">
              <h2 className="settings-section-title">Security</h2>
              <div className="settings-form-grid">
                {["Current Password", "New Password", "Confirm Password"].map(label => (
                  <div className="settings-field" key={label}>
                    <label>{label}</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Language Tab */}
          {activeTab === "language" && (
            <div className="settings-section">
              <h2 className="settings-section-title">Language & Region</h2>
              <div className="settings-form-grid">
                <div className="settings-field">
                  <label>Language</label>
                  <select>
                    <option>English (US)</option>
                    <option>French</option>
                    <option>Kinyarwanda</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div className="settings-field">
                  <label>Timezone</label>
                  <select>
                    <option>UTC+2 (Kigali)</option>
                    <option>UTC+0 (London)</option>
                    <option>UTC-5 (New York)</option>
                  </select>
                </div>
                <div className="settings-field">
                  <label>Date Format</label>
                  <select>
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="settings-save-row">
            {saved && <span className="save-success">✓ Changes saved successfully!</span>}
            <button className="dash-btn-primary" onClick={handleSave}>
              <FiSave /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
