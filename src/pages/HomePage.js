import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {/* LEFT SIDE - image */}
        <div
          style={{
            flex: "1",
            backgroundImage: "url('/homepage-new.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* RIGHT SIDE - menu */}
        <div
          style={{
            flex: "0 0 300px",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "30px" }}>
            Nurdle Map Project
          </h2>
          <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link style={{ textDecoration: "none", color: "#27476E" }} to="/interactive-map">
              Interactive Nurdle Map
            </Link>
            <Link style={{ textDecoration: "none", color: "#27476E" }} to="/confidence-map">
              Interactive Nurdle Map (Confidence Scores)
            </Link>
            <Link style={{ textDecoration: "none", color: "#27476E" }} to="/advocacy">
              Advocacy & Solutions
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
