import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center px-6 border-b" style={{
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      borderColor: "rgba(255,255,255,0.08)"
    }}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div style={{
          width: 28, height: 28,
          background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
          borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 700,
          fontSize: "1.15rem",
          letterSpacing: "-0.02em",
          background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          CollabDocs
        </span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-2">
        <button style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.75)",
          padding: "5px 14px", borderRadius: 8,
          fontSize: "0.8rem", fontWeight: 500,
          cursor: "pointer", transition: "all 0.2s"
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "white"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Profile
        </button>
        <button style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "rgba(239,68,68,0.12)",
          border: "1px solid rgba(239,68,68,0.25)",
          color: "rgba(239,68,68,0.85)",
          padding: "5px 14px", borderRadius: 8,
          fontSize: "0.8rem", fontWeight: 500,
          cursor: "pointer", transition: "all 0.2s"
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.22)"; e.currentTarget.style.color = "#ef4444"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(239,68,68,0.12)"; e.currentTarget.style.color = "rgba(239,68,68,0.85)"; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Logout
        </button>
      </div>
    </nav>
  );
}
