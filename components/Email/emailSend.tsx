"use client";

import { useState } from "react";

export default function EmailSend() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function Send() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send the email.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        className={`bg-blue-900 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={Send}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send mail"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
