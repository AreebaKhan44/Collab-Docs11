import React from "react";

export default function Sidebar({ docs, setCurrentDoc, createDoc, currentDoc }) {
  return (
    <div style={{
      width: "260px",
      minWidth: "260px",
      height: "100%",
      background: "linear-gradient(180deg, #1a1730 0%, #13111f 100%)",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 12px",
      gap: 8
    }}>
      {/* Header */}
      <div style={{ padding: "0 4px 8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: "0.65rem", fontWeight: 600, color: "rgba(167,139,250,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
          My Documents
        </p>

        <button
          onClick={createDoc}
          style={{
            width: "100%",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "white",
            border: "none",
            padding: "9px 0", borderRadius: 10,
            fontSize: "0.8rem", fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(124,58,237,0.3)",
            transition: "all 0.2s",
            letterSpacing: "0.01em"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(124,58,237,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(124,58,237,0.3)"; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          New Document
        </button>
      </div>

      {/* Doc list */}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 4, paddingRight: 2 }}>
        {docs.length === 0 ? (
          <div style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: 8, color: "rgba(255,255,255,0.2)", paddingTop: 40
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.4">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <p style={{ fontSize: "0.75rem", textAlign: "center" }}>No documents yet.<br/>Create one to start.</p>
          </div>
        ) : (
          docs.map((doc) => {
            const isActive = currentDoc && currentDoc._id === doc._id;
            return (
              <div
                key={doc._id}
                onClick={() => setCurrentDoc(doc)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 10px", borderRadius: 9,
                  cursor: "pointer",
                  background: isActive ? "rgba(124,58,237,0.18)" : "transparent",
                  border: isActive ? "1px solid rgba(124,58,237,0.3)" : "1px solid transparent",
                  color: isActive ? "rgba(167,139,250,1)" : "rgba(255,255,255,0.55)",
                  transition: "all 0.15s",
                  fontSize: "0.82rem", fontWeight: isActive ? 600 : 400
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; } }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, opacity: 0.6 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{doc.title || "Untitled"}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
