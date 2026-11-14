import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: "", message: "" });

    const { name, email, subject, message } = formData;

    // Basic validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    const notificationTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    const autoReplyTemplateID =
      process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID;

    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (
      !serviceID ||
      !notificationTemplateID ||
      !autoReplyTemplateID ||
      !publicKey
    ) {
      setStatus({
        type: "error",
        message: "Email configuration is missing. Please try again later.",
      });
      return;
    }

    // Variables passed to both EmailJS templates
    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    setLoading(true);

    try {
      // 1. Send notification email to Shiba
      await emailjs.send(
        serviceID,
        notificationTemplateID,
        templateParams,
        publicKey,
      );

      // 2. Send automatic reply to the visitor
      let autoReplySent = true;

      try {
        await emailjs.send(
          serviceID,
          autoReplyTemplateID,
          templateParams,
          publicKey,
        );
      } catch (replyError) {
        console.error("Auto-reply error:", replyError);
        autoReplySent = false;
      }

      // 3. Show appropriate result
      if (autoReplySent) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! A confirmation email has been sent to you.",
        });
      } else {
        setStatus({
          type: "success",
          message:
            "Your message was received, but the confirmation email could not be sent.",
        });
      }

      // 4. Clear form after successful notification
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error:", error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="fade-in">
        <div className="section-tag">Let's Connect</div>

        <h2 className="section-title">
          Get in
          <br />
          Touch
        </h2>

        <p className="section-subtitle">
          Have an idea, opportunity, or just want to say hi? My inbox is always
          open.
        </p>
      </div>

      <div className="contact-grid fade-in">
        {/* Contact Information */}

        {/* Clickable Contact Information */}
        <div className="contact-info">
          {CONTACT_INFO.map((c, i) => {
            const type = c.label.trim().toUpperCase();

            const contactLinks = {
              EMAIL: `mailto:${c.val}`,
              PHONE: `tel:${c.val.replace(/[^\d+]/g, "")}`,
              LOCATION:
                "https://www.google.com/maps/search/?api=1&query=Kathmandu%2CNepal",
              LINKEDIN: c.val,
              GITHUB: c.val,
              FACEBOOK: c.val,
            };

            const displayNames = {
              LINKEDIN: "Visit LinkedIn Profile",
              GITHUB: "Explore GitHub Projects",
              FACEBOOK: "Connect on Facebook",
            };

            const url = contactLinks[type] || "#";

            const external = [
              "LOCATION",
              "LINKEDIN",
              "GITHUB",
              "FACEBOOK",
            ].includes(type);

            return (
              <a
                className="contact-item"
                key={i}
                href={url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className="contact-icon">{c.icon}</span>

                <div className="contact-details">
                  <div className="contact-label">{c.label}</div>

                  <div className="contact-val">
                    {displayNames[type] || c.val}
                  </div>
                </div>

                <span className="contact-arrow">↗</span>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              className="form-input"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              className="form-input"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              className="form-input"
              type="text"
              name="subject"
              placeholder="Internship Opportunity"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              className="form-input"
              name="message"
              placeholder="Hey Shiba, I'd like to..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          {/* Success and Error Messages */}
          {status.message && (
            <div
              role="status"
              aria-live="polite"
              style={{
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "6px",
                backgroundColor:
                  status.type === "success" ? "#e8f8ee" : "#fdecec",
                color: status.type === "success" ? "#166534" : "#b91c1c",
              }}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{
              width: "100%",
              justifyContent: "center",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>

          <div className="form-note">
            ⚡ Your message will be sent directly to my inbox.
          </div>
        </form>
      </div>
    </section>
  );
}
