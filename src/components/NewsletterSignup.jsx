"use client";

import { useState } from "react";

export default function NewsletterSignup({ variant = "inline" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Welcome to Selectoire.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: variant === "banner" ? "24px" : "16px",
          background:
            variant === "dark"
              ? "rgba(201,168,76,0.1)"
              : "rgba(180,160,120,0.08)",
          borderRadius: "6px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "20px",
            color: variant === "dark" ? "#C9A84C" : "#1a1a18",
            margin: 0,
          }}
        >
          Welcome to Selectoire.
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: variant === "dark" ? "#888" : "#8a8578",
            marginTop: "8px",
          }}
        >
          Your first curated selection arrives soon.
        </p>
      </div>
    );
  }

  // Inline variant — goes inside articles
  if (variant === "inline") {
    return (
      <div
        style={{
          background: "rgba(180,160,120,0.06)",
          border: "1px solid rgba(180,160,120,0.15)",
          borderRadius: "8px",
          padding: "24px",
          margin: "32px 0",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "18px",
            fontWeight: 500,
            color: "#1a1a18",
            margin: "0 0 6px",
          }}
        >
          Get our weekly picks
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#8a8578",
            margin: "0 0 16px",
            lineHeight: 1.5,
          }}
        >
          Honest reviews, seasonal selections, and deal alerts — no spam, no
          sponsored content.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "8px" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "1px solid rgba(180,160,120,0.25)",
              borderRadius: "4px",
              background: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#1a1a18",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "12px 24px",
              background: "#1a1a18",
              color: "#f5f0e8",
              border: "none",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: status === "loading" ? "wait" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
            }}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p style={{ fontSize: "12px", color: "#c0392b", marginTop: "8px" }}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // Banner variant — for article pages (bottom CTA)
  if (variant === "banner") {
    return (
      <div
        style={{
          background: "#faf5ee",
          border: "1px solid rgba(180,160,120,0.15)",
          borderRadius: "8px",
          padding: "40px 32px",
          textAlign: "center",
          margin: "48px 0",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "26px",
            fontWeight: 400,
            color: "#1a1a18",
            margin: "0 0 8px",
          }}
        >
          Enjoyed this review?
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#8a8578",
            margin: "0 0 24px",
            lineHeight: 1.6,
          }}
        >
          Get our weekly selections delivered to your inbox — honest reviews,
          seasonal picks, and deal alerts.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "8px",
            maxWidth: "440px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              flex: 1,
              padding: "14px 18px",
              border: "1px solid rgba(180,160,120,0.25)",
              borderRadius: "4px",
              background: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#1a1a18",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "14px 28px",
              background: "#1a1a18",
              color: "#f5f0e8",
              border: "none",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: status === "loading" ? "wait" : "pointer",
            }}
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status === "error" && (
          <p style={{ fontSize: "12px", color: "#c0392b", marginTop: "8px" }}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // Dark variant — for dashboard/dark pages
  return (
    <div
      style={{
        background: "rgba(201,168,76,0.06)",
        border: "1px solid rgba(201,168,76,0.15)",
        borderRadius: "10px",
        padding: "24px",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#C9A84C",
          margin: "0 0 6px",
        }}
      >
        Weekly Selectoire Newsletter
      </p>
      <p
        style={{
          fontSize: "12px",
          color: "#888",
          margin: "0 0 14px",
        }}
      >
        Curated picks, trend alerts, and deal notifications.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "8px" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex: 1,
            padding: "10px 14px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "6px",
            color: "#e0e0e0",
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "10px 20px",
            background: "#C9A84C",
            color: "#0a0a0b",
            border: "none",
            borderRadius: "6px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: status === "loading" ? "wait" : "pointer",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {status === "loading" ? "..." : "Join"}
        </button>
      </form>
    </div>
  );
}
