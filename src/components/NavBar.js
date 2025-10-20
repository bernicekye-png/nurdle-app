import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#f5f5f5",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <h1 style={{ fontFamily: "'Playfair Display', serif", margin: 0 }}>
        Nurdle Map Project
      </h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/interactive-map" style={linkStyle}>Interactive Map</Link>
        <Link to="/confidence-map" style={linkStyle}>Confidence Scores</Link>
        <Link to="/identifier" style={linkStyle}>Nurdle Identifier</Link> {/* ✅ New Link */}
        <Link to="/advocacy" style={linkStyle}>Advocacy</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#27476E",
  fontWeight: "bold"
};
