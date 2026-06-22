import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import "../../styles/DashboardPages.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      detail: "support@tailadmin.com",
      sub: "We reply within 24 hours",
      color: "#3C50E0",
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      detail: "+1 (555) 000-1234",
      sub: "Mon – Fri, 9am – 6pm",
      color: "#10b981",
    },
    {
      icon: <FiMapPin />,
      title: "Our Office",
      detail: "KG 7 Ave, Kigali, Rwanda",
      sub: "Visit us anytime",
      color: "#f59e0b",
    },
  ];

  return (
    <div className="dash-page">
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Contact</h1>
          <p className="dash-page-sub">Get in touch with our support team</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-row">
        {contactInfo.map((item, i) => (
          <div className="contact-info-card" key={i}>
            <div className="contact-icon-wrap" style={{ background: `${item.color}1a`, color: item.color }}>
              {item.icon}
            </div>
            <div>
              <p className="contact-info-title">{item.title}</p>
              <p className="contact-info-detail">{item.detail}</p>
              <p className="contact-info-sub">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="dash-table-card contact-form-card">
        <h2 className="settings-section-title">Send a Message</h2>

        {sent && (
          <div className="contact-success">
            <FiCheckCircle />
            <span>Your message has been sent successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="settings-form-grid">
            <div className="settings-field">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="settings-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="settings-field full-width">
              <label>Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>
            <div className="settings-field full-width">
              <label>Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="settings-save-row">
            <button type="submit" className="dash-btn-primary">
              <FiSend /> Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
